package net.abaza.automation.db.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.abaza.automation.db.model.ActionType;
import net.abaza.automation.db.repository.ActionTypeRepository;

@Service
public class ActionTypeDaoImpl implements ActionTypeDao {
	
	@Autowired
	private ActionTypeRepository actionTypeRepository;

	@Override
	public ActionType save(ActionType actionType) {
		return actionTypeRepository.save(actionType);
	}

	@Override
	public List<ActionType> selectAll() {
		return actionTypeRepository.findAll();
	}

}
