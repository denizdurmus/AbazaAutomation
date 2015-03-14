package net.abaza.automation.db.dao;

import java.util.List;

import net.abaza.automation.db.model.SelectorType;
import net.abaza.automation.db.repository.SelectorTypeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SelectorTypeDaoImpl implements SelectorTypeDao {
	
	@Autowired
	private SelectorTypeRepository selectorTypeRepository;

	@Override
	public SelectorType save(SelectorType selectorType) {
		return selectorTypeRepository.save(selectorType);
	}

	@Override
	public List<SelectorType> selectAll() {
		return selectorTypeRepository.findAll();
	}

}
