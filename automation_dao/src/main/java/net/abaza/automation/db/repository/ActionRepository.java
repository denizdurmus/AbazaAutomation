package net.abaza.automation.db.repository;

import java.util.List;

import net.abaza.automation.db.model.Action;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ActionRepository extends JpaRepository<Action, Long> {
	
	@Query("Select distinct action from Action action "
			+ "left join fetch action.actionType aType "
			+ "left join fetch action.selectorType sType ")
	public List<Action> selectAll();

}
