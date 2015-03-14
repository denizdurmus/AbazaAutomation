package net.abaza.automation.test.db.dao;

import net.abaza.automation.db.DatabaseConfig;
import net.abaza.automation.db.dao.TestCaseDao;
import net.abaza.automation.db.model.TestCase;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.util.Assert;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {DatabaseConfig.class})
public class TestCaseDaoTest {
	@Autowired
	private TestCaseDao testCaseDao;
	
	@Test
	public void insertTest() {
		TestCase testCase = new TestCase();
		
		testCase.setName("testTestCase");
		testCase.setProjectId(123);
		testCase.setStatus('0');
		
		testCaseDao.save(testCase);
		
		Assert.notNull(testCase.getId());
	}
	
	
	@Test
	public void selectAllTest() {		
		Assert.notEmpty(testCaseDao.selectAll());
	}
	
}
