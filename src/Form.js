import React, { useState } from 'react'

const Form = props => {
   const initial = { id: null, Produits: '', Prix: '' }
   const [ user, setUser ] = useState(initial)
   const changed = event => {
   const { name, value } = event.target
   setUser({ ...user, [name]: value })
 }
	return (
		<form 
      onSubmit={event => {
         event.preventDefault()
         
         if (!user.Produits || !user.Prix) return

         if(isNaN(user.Prix)){
            var erreur = document.getElementById('erreur')
            erreur.innerHTML = 'Entrer un nombre'

        }else{
            var erreur = document.getElementById('erreur')
            erreur.innerHTML = ''
            //props.updateUser(user.id, user)
            props.ajouter(user)
            props.setCount(props.count + 1)
            setUser(initial)
        }     
         
       }}>
			<label>Produit</label>
			<input type="text" name="Produits" className="id1" value={user.Produits} onChange={changed}/>
			<label>Prix</label>
			<input type="text" name="Prix" className="id2"  value={user.Prix} onChange={changed} />
         <label>Description</label>
        <textarea></textarea>
        <input type="file"></input>
			<button id="ajout" className="btn btn-primary">Ajouter</button>
         <p id="erreur"></p>
        
		</form>
   )
}
export default Form