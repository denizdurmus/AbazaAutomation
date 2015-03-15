package net.abaza.automation.db.dao;

import java.util.List;

import net.abaza.automation.db.AutomationDaoException;
import net.abaza.automation.db.model.TestCaseResult;
import net.abaza.automation.db.repository.TestCaseResultRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TestCaseResultDaoImpl implements TestCaseResultDao {

	@Autowired
	private TestCaseResultRepository testcaseResultRepository;
	
	@Override
	public TestCaseResult save(TestCaseResult testCaseResult)
			throws AutomationDaoException {
		try {
			return testcaseResultRepository.save(testCaseResult);
		} catch(Exception e) {
			throw new AutomationDaoException(e);
		}
	}

	@Override
	public List<TestCaseResult> selectAll() throws AutomationDaoException {
		try {
			return testcaseResultRepository.selectAll();
		} catch(Exception e) {
			throw new AutomationDaoException(e);
		}
	}

	@Override
	public List<TestCaseResult> selectByTestCaseId(long testcaseId)
			throws AutomationDaoException {
		try {
			return testcaseResultRepository.selectByTestCaseId(testcaseId);
		} catch(Exception e) {
			throw new AutomationDaoException(e);
		}
	}

	@Override
	public List<TestCaseResult> selectByBatchId(long batchId)
			throws AutomationDaoException {
		try {
			return testcaseResultRepository.selectByBatchId(batchId);
		} catch(Exception e) {
			throw new AutomationDaoException(e);
		}
	}

}
