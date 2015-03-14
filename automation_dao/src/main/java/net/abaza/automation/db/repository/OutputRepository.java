package net.abaza.automation.db.repository;

import java.util.List;

import net.abaza.automation.db.model.Output;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface OutputRepository extends JpaRepository<Output, Long> {
	
	@Query("Select distinct output from Output output "
			+ "left join fetch output.outputType oType "
			+ "left join fetch output.selectorType sType")
	public List<Output> selectAll();

}
