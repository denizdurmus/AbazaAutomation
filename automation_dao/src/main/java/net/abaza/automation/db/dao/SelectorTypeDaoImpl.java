package net.abaza.automation.db.dao;

import java.util.List;

import net.abaza.automation.db.AutomationDaoException;
import net.abaza.automation.db.model.SelectorType;
import net.abaza.automation.db.repository.SelectorTypeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SelectorTypeDaoImpl implements SelectorTypeDao {

	@Autowired
	private SelectorTypeRepository selectorTypeRepository;

	@Override
	public SelectorType save(SelectorType selectorType)
			throws AutomationDaoException {
		try {
			return selectorTypeRepository.save(selectorType);
		} catch (Exception e) {
			throw new AutomationDaoException(e);
		}
	}

	@Override
	public List<SelectorType> selectAll() throws AutomationDaoException {
		try {
			return selectorTypeRepository.findAll();
		} catch (Exception e) {
			throw new AutomationDaoException(e);
		}
	}

}
