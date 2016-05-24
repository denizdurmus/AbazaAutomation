package net.abaza.automation.test.db.dao;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.util.Assert;

import net.abaza.automation.db.AutomationDaoException;
import net.abaza.automation.db.dao.OutputDao;
import net.abaza.automation.db.model.Output;
import net.abaza.automation.db.model.OutputType;
import net.abaza.automation.db.model.SelectorType;
import net.abaza.automation.test.db.config.DatabaseTestConfig;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {DatabaseTestConfig.class})
public class OutputDaoTest {
	
	@Autowired
	private OutputDao outputDao;
	
	@Test
	public void insertTest() throws AutomationDaoException {
		Output output = new Output();
		
		OutputType oType = new OutputType();
		oType.setId(1);
		
		SelectorType sType = new SelectorType();
		sType.setId(1);
		
		output.setOutputType(oType);
		output.setSelectorType(sType);
		output.setSelectorValue("formDiv");
		output.setValue("xyz Test");
		output.setTestCaseStepId(1L);
		
		outputDao.save(output);
		
		Assert.notNull(output.getId());
	}
	
	
	@Test
	public void selectAllTest() throws AutomationDaoException {		
		Assert.notEmpty(outputDao.selectAll());
	}
	
	@Test
	public void selectByTestCaseIdTest() throws AutomationDaoException {
		Assert.notEmpty(outputDao.selectByTestCaseStepId(1));
	}

}
