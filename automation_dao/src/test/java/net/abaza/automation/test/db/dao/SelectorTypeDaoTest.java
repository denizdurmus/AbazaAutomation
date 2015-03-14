package net.abaza.automation.test.db.dao;

import net.abaza.automation.db.DatabaseConfig;
import net.abaza.automation.db.dao.SelectorTypeDao;
import net.abaza.automation.db.model.SelectorType;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.util.Assert;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes = {DatabaseConfig.class})
public class SelectorTypeDaoTest {
	
	@Autowired
	private SelectorTypeDao selectorTypeDao;
	
	@Test
	public void insertTest() {
		SelectorType selectorType = new SelectorType();
		
		selectorType.setName("Id");
		
		selectorTypeDao.save(selectorType);
		
		Assert.notNull(selectorType.getId());
	}
	
	
	@Test
	public void selectAllTest() {		
		Assert.notEmpty(selectorTypeDao.selectAll());
	}
}
