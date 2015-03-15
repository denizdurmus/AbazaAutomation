package net.abaza.automation.test.db.dao;

import net.abaza.automation.db.AutomationDaoException;
import net.abaza.automation.db.DatabaseConfig;
import net.abaza.automation.db.dao.ActionDao;
import net.abaza.automation.db.model.Action;
import net.abaza.automation.db.model.ActionType;
import net.abaza.automation.db.model.SelectorType;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.util.Assert;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {DatabaseConfig.class})
public class ActionDaoTest {
	
	@Autowired
	private ActionDao actionDao;
	
	@Test
	public void insertTest() throws AutomationDaoException {		
		ActionType aType = new ActionType();
		aType.setId(1L);
		
		SelectorType sType = new SelectorType();
		sType.setId(1L);
		
		Action action = new Action();
		action.setActionType(aType);
		action.setSelectorType(sType);
		action.setSelectorValue("usernameInput");
		action.setValue("Test");
		action.setTestCaseId(0);
		
		actionDao.save(action);
		
		Assert.notNull(action.getId());
	}
	
	@Test
	public void selectAllTest() throws AutomationDaoException {		
		Assert.notEmpty(actionDao.selectAll());
	}
	
	@Test
	public void selectByTestcaseIdTest() throws AutomationDaoException {
		Assert.notEmpty(actionDao.selectByTestCaseId(1));
	}

}
