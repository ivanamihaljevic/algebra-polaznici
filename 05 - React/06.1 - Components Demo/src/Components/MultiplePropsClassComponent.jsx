import React from 'react';

export default class MultiplePropsClassComponent extends React.Component {
    render() {
        const { name, age } = this.props; // Definirali smo NAME i AGE i rekli da su to PROPSI
        return (
            <p>Hej, class komponento. Kako se zoveš?</p>,
            <p>Hej, zovem se {name}. Imam {age} godina.</p>
        );
    }
}