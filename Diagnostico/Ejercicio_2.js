const matriculas = async () => {
    const matricula = await fetch('https://api.generadordni.es/v2/vehicle/platenumber?results=10')
    const data = await matricula.json()
    console.log(data)
}

matriculas();