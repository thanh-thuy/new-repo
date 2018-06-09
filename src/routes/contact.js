import React, { PureComponent, Fragment } from 'react';
import Menu from '../components/menu';
import Footer from '../components/footer';
import Header from '../components/header';


export default class Contact  extends PureComponent {
    render() {
        return (
            <Fragment>
                <Header content="tweety react-app"/>
                <Menu/>
                    <section>
                        <h2>Dane kontaktowe: </h2>
                        <p>Imię i nazwisko: </p>
                        <p>E-mail: </p>
                        <p>Telefon: </p>
                    </section>
                <Footer content=""/>
                

            </Fragment>
        );
    }
}