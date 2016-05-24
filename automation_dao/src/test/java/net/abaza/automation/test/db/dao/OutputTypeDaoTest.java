package net.abaza.automation.test.db.dao;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.util.Assert;

import net.abaza.automation.db.AutomationDaoException;
import net.abaza.automation.db.dao.OutputTypeDao;
import net.abaza.automation.db.model.OutputType;
import net.abaza.automation.test.db.config.DatabaseTestConfig;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {DatabaseTestConfig.class})
public class OutputTypeDaoTest {
	
	@Autowired
	private OutputTypeDao outputTypeDao;
	
	@Test
	public void insertTest() throws AutomationDaoException {
		OutputType outputType = new OutputType();
		
		outputType.setName("Label");
		
		outputTypeDao.save(outputType);
		
		Assert.notNull(outputType.getId());
	}
	
	
	@Test
	public void selectAllTest() throws AutomationDaoException {		
		Assert.notEmpty(outputTypeDao.selectAll());
	}

}
