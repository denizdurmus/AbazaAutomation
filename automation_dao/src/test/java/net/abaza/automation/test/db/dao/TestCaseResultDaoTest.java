package net.abaza.automation.test.db.dao;


import java.sql.Timestamp;
import java.time.LocalDateTime;

import net.abaza.automation.db.AutomationDaoException;
import net.abaza.automation.db.DatabaseConfig;
import net.abaza.automation.db.dao.TestCaseResultDao;
import net.abaza.automation.db.model.TestCase;
import net.abaza.automation.db.model.TestCaseResult;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {DatabaseConfig.class})
public class TestCaseResultDaoTest {
	@Autowired
	private TestCaseResultDao testCaseResultDao;
	
	@Test
	public void insertTest() throws AutomationDaoException {
		TestCaseResult result = new TestCaseResult();
		
		TestCase tCase = new TestCase();
		tCase.setId(1);
		
		result.setDate(Timestamp.valueOf(LocalDateTime.now()));
		result.setResult('1');
		result.setTestCase(tCase);
		
		testCaseResultDao.save(result);
		
		Assert.assertNotNull(result.getId());
	}
	
	
	@Test
	public void selectAllTest() throws AutomationDaoException {		
		Assert.assertEquals(3, testCaseResultDao.selectAll().size(), 1);
	}
	
	
	@Test
	public void selectByTestcaseIdTest() throws AutomationDaoException {		
		Assert.assertEquals(3, testCaseResultDao.selectByTestCaseId(1).size());
	}
	
}
