package net.abaza.automation.db.dao;

import java.util.List;

import net.abaza.automation.db.AutomationDaoException;
import net.abaza.automation.db.model.Output;
import net.abaza.automation.db.repository.OutputRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OutputDaoImpl implements OutputDao {

	@Autowired
	private OutputRepository outputRepository;

	@Override
	public Output save(Output output) throws AutomationDaoException {
		try {
			return outputRepository.save(output);
		} catch (Exception e) {
			throw new AutomationDaoException(e);
		}
	}

	@Override
	public List<Output> selectAll() throws AutomationDaoException {
		try {
			return outputRepository.selectAll();
		} catch (Exception e) {
			throw new AutomationDaoException(e);
		}
	}

	@Override
	public List<Output> selectByTestCaseId(long testcaseId)
			throws AutomationDaoException {
		try {
			return outputRepository.selectByTestCaseId(testcaseId);
		} catch (Exception e) {
			throw new AutomationDaoException(e);
		}
	}

}
