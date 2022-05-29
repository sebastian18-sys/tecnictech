import React from 'react'
import "./features.css"
import Card from "../Card"

export default function Features() {
    return (
        <section name="#features" id="features" className="features">
            <div className="features__title"> 
                <h2>Beneficios</h2>
                <p>Confiable y diseñado para su uso diario.</p>
            </div>
            <section className="features__container">
                <Card title="Menos tareas" body="Reduccion de actividades que no generan valor." task />
                <Card title="Tiempo" body="Reducción de tiempo en procesos." time />
                <Card title="Aumenta su productividad" body="Optimiza costos en la ejecución de un proceso y mejora su rentabilidad." prod />
                <Card title="Genera valor" body="Genera valor en su empresa para generar experiencias únicas." value />
                <Card title="Rápida configuración" body="De la mano de nuestro equipo de implementación comienza a utilizar su sistema de manera muy sencilla." setting />
                <Card title="Informes y estadísticas" body="Informes en tiempo real para que puedas tomar las mejores decisiones." report />
            </section>
        </section>
    )
}
