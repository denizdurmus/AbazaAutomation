package net.abaza.automation.db.dao;

import java.util.List;

import net.abaza.automation.db.AutomationDaoException;
import net.abaza.automation.db.model.Action;
import net.abaza.automation.db.repository.ActionRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ActionDaoImpl implements ActionDao {

	@Autowired
	private ActionRepository actionRepository;
	
	@Override
	public Action save(Action action) throws AutomationDaoException {		
		try {
			return actionRepository.save(action);
		} catch (Exception e) {
			throw new AutomationDaoException(e);
		}
	}

	@Override
	public List<Action> selectAll() throws AutomationDaoException {
		try {
			return actionRepository.selectAll();
		} catch (Exception e) {
			throw new AutomationDaoException();
		}
	}

	@Override
	public List<Action> selectByTestCaseStepId(long testcaseId) throws AutomationDaoException {
		try {
			return actionRepository.selectByTestCaseStepId(testcaseId);
		} catch (Exception e) {
			throw new AutomationDaoException();
		}
	}

}
