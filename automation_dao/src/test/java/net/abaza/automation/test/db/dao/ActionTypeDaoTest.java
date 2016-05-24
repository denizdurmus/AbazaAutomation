package net.abaza.automation.test.db.dao;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.util.Assert;

import net.abaza.automation.db.AutomationDaoException;
import net.abaza.automation.db.dao.ActionTypeDao;
import net.abaza.automation.db.model.ActionType;
import net.abaza.automation.test.db.config.DatabaseTestConfig;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {DatabaseTestConfig.class})
public class ActionTypeDaoTest {
	
	@Autowired
	private ActionTypeDao actionTypeDao;
	
	@Test
	public void insertTest() throws AutomationDaoException {
		ActionType actionType = new ActionType();
		
		actionType.setName("Click");
		actionType.setHasElement('1');
		actionType.setHasInput('0');
		
		actionTypeDao.save(actionType);
		
		Assert.notNull(actionType.getId());
	}
	
	
	@Test
	public void queryAllTest() throws AutomationDaoException {		
		Assert.notEmpty(actionTypeDao.selectAll());
	}

}
