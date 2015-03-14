package net.abaza.automation.test.db.dao;

import net.abaza.automation.db.DatabaseConfig;
import net.abaza.automation.db.dao.OutputDao;
import net.abaza.automation.db.model.Output;
import net.abaza.automation.db.model.OutputType;
import net.abaza.automation.db.model.SelectorType;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.util.Assert;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {DatabaseConfig.class})
public class OutputDaoTest {
	
	@Autowired
	private OutputDao outputDao;
	
	@Test
	public void insertTest() {
		Output output = new Output();
		
		OutputType oType = new OutputType();
		oType.setId(1L);
		
		SelectorType sType = new SelectorType();
		sType.setId(1L);
		
		output.setOutputType(oType);
		output.setSelectorType(sType);
		output.setSelectorValue("formDiv");
		output.setValue("xyz Test");
		
		outputDao.save(output);
		
		Assert.notNull(output.getId());
	}
	
	
	@Test
	public void selectAllTest() {		
		Assert.notEmpty(outputDao.selectAll());
	}

}
