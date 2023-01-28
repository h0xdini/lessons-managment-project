import React, { useContext } from 'react'
import Button from './Button'
import ImageSelect from './ImageSelect'
import Input from './Input'
import wilays from '../wilays'
import AppContext from '../store'

const PostAnnounce = () => {
    const appContext = useContext(AppContext)

  return (
    <article className='post'>
        <div className="container">
            <div className="main-post">
                <header>
                    <h1>Publier une announce</h1>
                    <p>Veuillez remplir les informations suivantes:</p>
                </header>

                <article>
                    <div className="double-form-control">
                        <Input label='Catégorie' arr={['primary school', 'middle school', 'high school']} category placeHolder={appContext.category} />
                        <Input label='Cours' cours placeHolder={appContext.cours} />
                    </div>

                    <div className="double-form-control">
                        <Input label='Wilaya' arr={wilays} wilayas placeHolder={appContext.wilaya}/>
                        <Input label='Commune' communes placeHolder={appContext.commune} />
                    </div>

                    <div className="double-form-control">
                        <div className="form-control">
                            <label className='outter'>Modalié</label>
                            <div className="choices">
                                <article>
                                    <input type="radio" id="en-ligne" value='En-ligne' name='madalite' onChange={() => {
                                        appContext.setPlace(false)
                                        console.log(appContext.isOnline)
                                    }} />
                                    <label htmlFor="en-ligne">En-ligne</label>
                                </article>
                                <article>
                                    <input type="radio" id="hors-ligne" value='Hors-ligne' name='madalite' defaultChecked onChange={() => {
                                        appContext.setPlace(true)
                                        console.log(appContext.isOnline)
                                    }} />
                                    <label htmlFor="hors-ligne">Hors-ligne</label>
                                </article>
                            </div>
                        </div>
                        <Input label='Tarif' noChevron />
                    </div>

                    <div className="double-form-control">
                        <Input label='Téléphone' noChevron />
                        <Input label='Email' noChevron />
                    </div>

                    <Button btnText='Ajouter une localisation' outline />
                </article>
            </div>

            <div className="main-post">
                    <Input label='Description' noChevron textarea/>
                    <ImageSelect />
            </div>
        </div>

        <div className="btn-container">
            <Button btnText='Publier' />
        </div>
    </article>
  )
}

export default PostAnnounce