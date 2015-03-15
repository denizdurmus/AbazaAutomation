package net.abaza.automation.db.repository;

import java.util.List;

import net.abaza.automation.db.model.Output;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface OutputRepository extends JpaRepository<Output, Long> {
	
	@Query("Select distinct output from Output output "
			+ "left join fetch output.outputType oType "
			+ "left join fetch output.selectorType sType")
	public List<Output> selectAll();
	
	@Query("Select distinct output from Output output "
			+ "left join fetch output.outputType oType "
			+ "left join fetch output.selectorType sType "
			+ "where output.testCaseId = :testcaseId")
	public List<Output> selectByTestCaseId(@Param("testcaseId") long testcaseId);

}
