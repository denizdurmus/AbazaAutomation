package net.abaza.automation.db.dao;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import net.abaza.automation.db.model.OutputType;
import net.abaza.automation.db.repository.OutputTypeRepository;

@Service
public class OutputTypeDaoImpl implements OutputTypeDao {
	
	@Autowired
	private OutputTypeRepository outputTypeRepository;
	
	@Override
	public OutputType save(OutputType outputType) {
		return outputTypeRepository.save(outputType);
	}

	@Override
	public List<OutputType> selectAll() {
		return outputTypeRepository.findAll();
	}

}
