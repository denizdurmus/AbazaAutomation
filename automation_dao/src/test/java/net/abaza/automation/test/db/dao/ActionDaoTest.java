package net.abaza.automation.test.db.dao;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.util.Assert;

import net.abaza.automation.db.AutomationDaoException;
import net.abaza.automation.db.dao.ActionDao;
import net.abaza.automation.db.model.Action;
import net.abaza.automation.db.model.ActionType;
import net.abaza.automation.db.model.SelectorType;
import net.abaza.automation.test.db.config.DatabaseTestConfig;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {DatabaseTestConfig.class})
public class ActionDaoTest {
	
	@Autowired
	private ActionDao actionDao;
	
	@Test
	public void insertTest() throws AutomationDaoException {		
		ActionType aType = new ActionType();
		aType.setId(1);
		
		SelectorType sType = new SelectorType();
		sType.setId(1);
		
		Action action = new Action();
		action.setActionType(aType);
		action.setSelectorType(sType);
		action.setSelectorValue("usernameInput");
		action.setValue("Test");
		action.setTestCaseStepId(1);
		
		actionDao.save(action);
		
		Assert.notNull(action.getId());
	}
	
	@Test
	public void selectAllTest() throws AutomationDaoException {		
		Assert.notEmpty(actionDao.selectAll());
	}
	
	@Test
	public void selectByTestcaseIdTest() throws AutomationDaoException {
		Assert.notEmpty(actionDao.selectByTestCaseStepId(1));
	}

}
