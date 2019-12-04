package com.dsoft.tpdsoft.repositories;

import com.dsoft.tpdsoft.model.Menu;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MenuRepository extends PagingAndSortingRepository<Menu, Integer> {
    // List<Menu> findByCategoriesIn(Category category);
}
