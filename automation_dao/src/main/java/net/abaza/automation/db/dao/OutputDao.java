package net.abaza.automation.db.dao;

import java.util.List;

import net.abaza.automation.db.model.Output;

public interface OutputDao {
	
	public Output save(Output output);
	public List<Output> selectAll();

}
