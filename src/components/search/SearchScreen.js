import React, { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { getHeroByName } from '../../selectors/getHeroByName';
import { HeroCard } from '../hero/HeroCard';
import queryString from 'query-string';

export const SearchScreen = () => {

  const navigate = useNavigate();
  const location = useLocation();

  //desestructuro el query
  //tambien le doy un valor por defecto, esto puedo hacerlo ya q espero el retorno de una funcion
  const { q = '' } = queryString.parse(location.search);

  const [formValues, handleInputChange] = useForm({
    searchText: q,
  });


  const { searchText } = formValues;

  /** NOTA MENTAL
   * ¿Como funciona el useMemo,useCallback,useLayoutDefect,useEffect?
   * todos los hooks son funciones
   * y reciben una callback 
   * el RETORNO("es importante que se retorne algo") es lo que se memoriza 
   * en este caso se guarda en una variable que se llama heroesFiltered
   * y el segundo valor es la DEPENDENCIA
   * y solo se va a memorizar de nuevo si la "DEPENDENCIA" cambia
   */ 
  
  const heroesFiltered = useMemo(() => getHeroByName(q),[q]);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  }

  return (
    <>
      <h1>Search Hero</h1>
      <hr></hr>

      <div className='row'>

        <div className='col-5'>
          <h4>Search</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input type="text"
              placeholder="Hero..."
              className='form-control'
              name='searchText'
              autoComplete='off'
              onChange={handleInputChange}
              value={searchText}
            />

            <button
              className='btn btn-outline-primary mt-2'
              type='submit'
            >
              Find
            </button>
          </form>
        </div>

        <div className='col-7'>
          <h4>Resultados</h4>
          <hr />

          {
            (q === '')
              ? <div className='alert alert-info'>Buscar un heroe</div>
              : (heroesFiltered.length === 0)
                && <div className='alert alert-danger'>No hay resultados: {q} </div>
          }


          {
            heroesFiltered.map(hero => (
              <HeroCard key={hero.id} {...hero} />
            ))
          }
        </div>
      </div>
    </>
  )
}
