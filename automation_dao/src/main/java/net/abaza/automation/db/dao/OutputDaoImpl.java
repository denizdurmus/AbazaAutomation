package net.abaza.automation.db.dao;

import java.util.List;

import net.abaza.automation.db.model.Output;
import net.abaza.automation.db.repository.OutputRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class OutputDaoImpl implements OutputDao {
	
	@Autowired
	private OutputRepository outputRepository;
	
	@Override
	public Output save(Output output) {
		return outputRepository.save(output);
	}

	@Override
	public List<Output> selectAll() {
		return outputRepository.findAll();
	}

}
