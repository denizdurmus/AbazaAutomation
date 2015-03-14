package net.abaza.automation.db.dao;

import java.util.List;

import net.abaza.automation.db.model.TestCase;
import net.abaza.automation.db.repository.TestCaseRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TestCaseDaoImpl implements TestCaseDao {

	@Autowired
	private TestCaseRepository testCaseRepository;
	
	@Override
	public TestCase save(TestCase testCase) {
		return testCaseRepository.save(testCase);
	}

	@Override
	public List<TestCase> selectAll() {
		return testCaseRepository.findAll();
	}

}
