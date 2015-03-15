package net.abaza.automation.db.dao;

import java.util.List;

import net.abaza.automation.db.AutomationDaoException;
import net.abaza.automation.db.model.ActionType;
import net.abaza.automation.db.repository.ActionTypeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ActionTypeDaoImpl implements ActionTypeDao {
	
	@Autowired
	private ActionTypeRepository actionTypeRepository;

	@Override
	public ActionType save(ActionType actionType) throws AutomationDaoException {
		try {
			return actionTypeRepository.save(actionType);
		} catch (Exception e) {
			throw new AutomationDaoException(e);
		}
	}

	@Override
	public List<ActionType> selectAll() throws AutomationDaoException {
		try { 
			return actionTypeRepository.findAll();
		} catch (Exception e) {
			throw new AutomationDaoException(e);
		}		
	}

}
