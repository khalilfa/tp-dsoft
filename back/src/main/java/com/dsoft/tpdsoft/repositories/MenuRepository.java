package com.dsoft.tpdsoft.repositories;

import com.dsoft.tpdsoft.model.Category;
import com.dsoft.tpdsoft.model.Menu;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MenuRepository extends PagingAndSortingRepository<Menu, Integer> {
    List<Menu> findAllByCategories(Category category);
}
