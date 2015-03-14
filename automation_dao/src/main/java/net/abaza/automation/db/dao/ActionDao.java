package net.abaza.automation.db.dao;

import java.util.List;

import net.abaza.automation.db.model.Action;

public interface ActionDao {
	
	public Action save(Action action);
	public List<Action> selectAll();

}
