package net.abaza.automation.db.repository;

import net.abaza.automation.db.model.TestCase;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TestCaseRepository extends JpaRepository<TestCase, Long> {
	
	/*
	 * This is an example of join fetch for one to many
	 * So, no need to query details for each object in the list
	 * 
	@Query("Select distinct tc from TestCase tc "
			+ "left join fetch tc.actionList action "
			+ "left join fetch action.actionType aType "
			+ "left join fetch action.selectorType sType")
	public List<TestCase> selectAll();
	*/

}
