package net.abaza.automation.db.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.abaza.automation.db.AutomationDaoException;
import net.abaza.automation.db.model.OutputType;
import net.abaza.automation.db.repository.OutputTypeRepository;

@Service
public class OutputTypeDaoImpl implements OutputTypeDao {

	@Autowired
	private OutputTypeRepository outputTypeRepository;

	@Override
	public OutputType save(OutputType outputType) throws AutomationDaoException {
		try {
			return outputTypeRepository.save(outputType);
		} catch (Exception e) {
			throw new AutomationDaoException(e);
		}
	}

	@Override
	public List<OutputType> selectAll() throws AutomationDaoException {
		try {
			return outputTypeRepository.findAll();
		} catch (Exception e) {
			throw new AutomationDaoException(e);
		}
	}

}
