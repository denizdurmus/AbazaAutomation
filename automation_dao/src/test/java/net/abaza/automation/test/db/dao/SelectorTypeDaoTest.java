package net.abaza.automation.test.db.dao;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.util.Assert;

import net.abaza.automation.db.AutomationDaoException;
import net.abaza.automation.db.dao.SelectorTypeDao;
import net.abaza.automation.db.model.SelectorType;
import net.abaza.automation.test.db.config.DatabaseTestConfig;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {DatabaseTestConfig.class})
public class SelectorTypeDaoTest {
	
	@Autowired
	private SelectorTypeDao selectorTypeDao;
	
	@Test
	public void insertTest() throws AutomationDaoException {
		SelectorType selectorType = new SelectorType();
		
		selectorType.setName("Id");
		
		selectorTypeDao.save(selectorType);
		
		Assert.notNull(selectorType.getId());
	}
	
	
	@Test
	public void selectAllTest() throws AutomationDaoException {		
		Assert.notEmpty(selectorTypeDao.selectAll());
	}
}
