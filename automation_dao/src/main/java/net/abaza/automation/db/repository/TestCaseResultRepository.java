package net.abaza.automation.db.repository;

import java.util.List;

import net.abaza.automation.db.model.TestCaseResult;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface TestCaseResultRepository extends JpaRepository<TestCaseResult, Long> {
	
	@Query("Select result from TestCaseResult result "
			+ "left join fetch result.testCase tCase ")
	public List<TestCaseResult> selectAll();
	
	@Query("Select result from TestCaseResult result "
			+ "left join fetch result.testCase tCase "
			+ "where tCase.id = :testcaseId")
	public List<TestCaseResult> selectByTestCaseId(@Param("testcaseId") long testcaseId);
	
	@Query("Select result from TestCaseResult result "
			+ "left join fetch result.testCase tCase "
			+ "where result.batchId = :batchId")
	public List<TestCaseResult> selectByBatchId(@Param("batchId") long batchId);

}
