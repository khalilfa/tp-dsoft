import React from 'react';
import '../css/client.css';
import Axios from 'axios';
import Pagination from './Pagination';
import MenuListSide from './MenuListSide';
import SimpleSelect from './SimpleSelect';

export default class Client extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ['PIZZA', 'BEER', 'SUSHI', 'EMPANADAS', 'SUSHIVEGAN', 'HAMBURGUER', 'ICECREAM'],
      filters: ['Minimum', 'Maximum'],
      filter: '',
      category: '',
      pageable: undefined,
      menus: [],
      page: 0,
    };
    this.handleChangeFilter = this.handleChangeFilter.bind(this);
    this.handleChangeCategory = this.handleChangeCategory.bind(this);
    this.getMenus = this.getMenus.bind(this);
    this.getMenusByFilters = this.getMenusByFilters.bind(this);
  }

  componentDidMount() {
    this.getMenus();
  }

  getMenus(page = 0) {
    Axios.get(`http://127.0.0.1:8080/menus?page=${page}&elements=${5}`)
      .then((res) => res.data)
      .then((pageable) => {
        this.setState({ pageable, page, menus: pageable.content });
      });
  }

  getMenusByFilters(page = 0) {
    const { category, filter, categories, filters } = this.state;
    const selectedCategory = category === '' ? '' : `category=${categories[category]}`;
    const selectedPrice = filter === '' ? '' : `price=${filters[filter]}`;
    const existCategory = selectedCategory === '' ? '' : '&';
    const existPrice = selectedPrice === '' ? '' : '&';
    const urlFilters = selectedCategory + existCategory + selectedPrice + existPrice;
    const url = `http://127.0.0.1:8080/menus/filters?${urlFilters}page=${page}&elements=${5}`;
    Axios.get(url)
      .then((res) => res.data)
      .then((pageable) => {
        console.log(pageable);
        this.setState({ pageable, page, menus: pageable.content });
      });
  }

  handleChangeFilter(e) {
    const filter = e.target.value;
    this.setState({ filter }, () => this.getMenusByFilters());
  }

  handleChangeCategory(e) {
    const category = e.target.value;
    this.setState({ category }, () => this.getMenusByFilters());
  }

  render() {
    const { t } = this.props;
    const { menus, pageable, page, category, filter, categories, filters } = this.state;

    return (
      <div className="client-view row">

        <div className="filters col-md-4">
          <div className="row justify-content-center">
            <SimpleSelect
              className="filter col-md-10"
              items={categories}
              t={t}
              selector={category}
              handleChange={this.handleChangeCategory}
              selectorName="Category"
            />
            <SimpleSelect
              className="filter col-md-10"
              items={filters}
              t={t}
              selector={filter}
              handleChange={this.handleChangeFilter}
              selectorName="Min / Max"
            />
          </div>
        </div>

        <div className="menu-list col-md-8">
          <MenuListSide t={t} menus={menus} />
          <Pagination
            totalPages={pageable ? pageable.totalPages : 0}
            page={page}
            getMenus={this.getMenusByFilters}
          />
        </div>

      </div>
    );
  }
}

// const Client = (props) => {
//   const [pageable, setPageable] = useState(undefined);
//   const [menus, setMenus] = useState([]);
//   const [page, setPage] = useState(0);
//   const [filter, setFilter] = useState('');
//   const [category, setCategory] = useState('');
//   const { t } = props;
//   const { getTokenSilently } = useAuth0();
//   const categories = ['PIZZA', 'BEER', 'SUSHI', 'EMPANADAS', 'SUSHIVEGAN', 'HAMBURGUER', 'ICECREAM'];
//   const filters = ['Minimo', 'Maximo'];

//   const getMenus = async (selectedPage = 0) => {
//     try {
//       getTokenSilently()
//         .then((token) => {
//           const url = `http://127.0.0.1:8080/menus?page=${selectedPage}&elements=${5}`;
//           const config = {
//             headers: {
//               Authorization: `Bearer ${token}`,
//             },
//           };

//           Axios.get(url)
//             .then((res) => res.data)
//             .then((data) => setMenus(data.content))
//             .catch((error) => console.log(error));
//         })
//         .catch((error) => console.log(error));

//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleChangeFilter = (e) => {
//     const selectedFilter = e.target.value;
//     setFilter(selectedFilter);
//   };

//   const handleChangeCategory = (e) => {
//     const selectedCategory = e.target.value;
//     setCategory(selectedCategory);
//   };

//   useEffect(() => {
//     getMenus();
//   });

//   return (
//     <div className="client-view row">

//       <div className="filters col-md-4">
//         <div className="row justify-content-center">
//           <SimpleSelect
//             className="filter col-md-10"
//             items={categories}
//             t={t}
//             selectorName="Category"
//             selector={category}
//             handleChange={handleChangeCategory}
//           />
//           <SimpleSelect
//             className="filter col-md-10"
//             items={filters}
//             t={t}
//             selectorName="Min / Max"
//             selector={filter}
//             handleChange={handleChangeFilter}
//           />
//         </div>
//       </div>

//       <div className="menu-list col-md-8">
//         <MenuListSide t={t} menus={menus} />
//         <Pagination {...pageable} page={page} getMenus={getMenus} />
//       </div>

//     </div>
//   );
// };

// export default Client;
