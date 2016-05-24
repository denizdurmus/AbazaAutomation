package net.abaza.automation.test.db.dao;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.util.Assert;

import net.abaza.automation.db.AutomationDaoException;
import net.abaza.automation.db.dao.TestCaseDao;
import net.abaza.automation.db.model.TestCase;
import net.abaza.automation.test.db.config.DatabaseTestConfig;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {DatabaseTestConfig.class})
public class TestCaseDaoTest {
	@Autowired
	private TestCaseDao testCaseDao;
	
	@Test
	public void insertTest() throws AutomationDaoException {
		TestCase testCase = new TestCase();
		
		testCase.setName("testTestCase");
		testCase.setProjectId(123);
		testCase.setStatus('0');
		
		testCaseDao.save(testCase);
		
		Assert.notNull(testCase.getId());
	}
	
	
	@Test
	public void selectAllTest() throws AutomationDaoException {		
		Assert.notEmpty(testCaseDao.selectAll());
	}
	
}
