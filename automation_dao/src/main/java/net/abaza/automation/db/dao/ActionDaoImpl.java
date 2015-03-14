package net.abaza.automation.db.dao;

import java.util.List;

import net.abaza.automation.db.model.Action;
import net.abaza.automation.db.repository.ActionRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ActionDaoImpl implements ActionDao {

	@Autowired
	private ActionRepository actionRepository;
	
	@Override
	public Action save(Action action) {
		return actionRepository.save(action);
	}

	@Override
	public List<Action> selectAll() {
		return actionRepository.selectAll();
	}

}
