package edu.escuelaing.arsw.auctions.Repository.impl;

import java.util.Date;
import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.Query;
import javax.persistence.Converter;

import edu.escuelaing.arsw.auctions.Repository.custom.OfertaRepositoryCustom;
import edu.escuelaing.arsw.auctions.model.Oferta;
import edu.escuelaing.arsw.auctions.model.Publicacion;

@Converter(autoApply = true)
public class OfertaRepositoryImpl implements OfertaRepositoryCustom {
	
	@PersistenceContext
    EntityManager entityManager;
	@Override
	public void setOferta(int id, int oferta) {
		 Query query = entityManager.createNativeQuery("update publicacion set oferta=? where id=?",Publicacion.class);
		 
		 query.setParameter(1, oferta )
              .setParameter(2, id ).executeUpdate();

	}
	
	@Override
	public void addOferta(Oferta oferta) {
		Query query = entityManager.createNativeQuery("insert into oferta values(NEXTVAL('serial'),?,?,?,?,?,?)",Oferta.class);
		 
		 query.setParameter(1, oferta.getId())
		 	  .setParameter(2, oferta.getValorOfrecido() )
		 	  .setParameter(3, new Date())
		 	  .setParameter(4, oferta.getValorOfertaAutomatica())
		 	  .setParameter(5, false)		 	  
		 	  .setParameter(6, oferta.getUsuario() ).executeUpdate();
	}

	

	@Override
	public List<Oferta> getOfertaByUsuario(String IdUsuario) {
		Query query = entityManager.createNativeQuery("select * from oferta where usuario=?",Oferta.class);
		 
		query.setParameter(1, IdUsuario );
		return query.getResultList();
	}

	@Override
	public List<Oferta> getOfertaByPublicacion(int IdPublicacion) {
		Query query = entityManager.createNativeQuery("select * from oferta where publicacion=?",Oferta.class);
		 
		query.setParameter(1, IdPublicacion);
		return query.getResultList();
	}

	@Override
	public List<Oferta> getOferta(int id) {
		// TODO Auto-generated method stub
		return null;
	}



}
