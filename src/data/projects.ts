import educationCard from '../assets/images/education_card.jpeg';
import headBone from '../assets/images/head_bone.jpeg';
import archCamp from '../assets/images/arch_camp.webp';



export const projects = [
  {
    id: 'educacion',
    title: 'Talleres Educativos',
    description: 'Nuestro taller de PREHISTORIA para colegios e institutos tiene como objetivo enseñar al alumnado los conocimientos más destacados de la arqueología prehistórica.',
    image: educationCard,
    tags: ['Educación', 'Talleres', 'Escolar'],
    date: 'En curso',
    content: `
      <div class="space-y-8">
        <div>
          <h3 class="text-2xl font-serif font-bold text-stone-800 mb-4">Actividades Didácticas</h3>
          <p>Nuestro taller de PREHISTORIA para colegios e institutos tiene como objetivo enseñar al alumnado los conocimientos más destacados de la arqueología prehistórica a través de actividades didácticas y prácticas.</p>
          <ul class="list-disc list-inside mt-4 space-y-2 text-stone-700">
            <li>Explicamos de forma distendida y amena conocimientos científicos adaptados al nivel de cada curso.</li>
            <li>Realizamos actividades prácticas con el objetivo de facilitar su aprendizaje.</li>
            <li>Motivamos al alumnado en actividades de carácter científico a través de procedimientos que fomenten la curiosidad sobre nuestra sociedad.</li>
            <li>Creamos interés y compromiso por el patrimonio arqueológico, histórico y medioambiental que nos rodea.</li>
          </ul>
        </div>

        <div class="bg-stone-50 p-6 rounded-xl border border-stone-200">
          <h4 class="font-bold text-stone-900 mb-2">NOS DESPLAZAMOS A VUESTRO CENTRO EDUCATIVO</h4>
          <p>Llevamos todos los materiales necesarios para la actividad. Este taller sigue un eje cronológico desde el Paleolítico hasta el Neolítico, explicando los rasgos más destacados de cada periodo.</p>
        </div>

        <div>
          <h3 class="text-2xl font-serif font-bold text-stone-800 mb-4">Ejes Temáticos</h3>
          
          <div class="grid gap-6 md:grid-cols-2">
            <div class="bg-white p-6 rounded-lg shadow-sm border border-stone-100">
              <h4 class="font-bold text-xl text-clay-dark mb-2">¿Cómo evolucionó nuestra especie?</h4>
              <p class="text-stone-600">Abordaremos los conceptos generales de la evolución humana a lo largo del tiempo. El uso de réplicas de cráneos junto con materiales didácticos facilitará el aprendizaje.</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-sm border border-stone-100">
              <h4 class="font-bold text-xl text-clay-dark mb-2">¿Qué herramientas utilizaban?</h4>
              <p class="text-stone-600">Fabricaremos utensilios usados para propósitos domésticos y de caza (puntas de flecha, bifaces, hachas de mano).</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-sm border border-stone-100">
              <h4 class="font-bold text-xl text-clay-dark mb-2">¿Con qué pintaban?</h4>
              <p class="text-stone-600">Pintaremos con pigmentos naturales y utensilios como lo hacían ellos, realizando demostraciones de técnicas como el aerógrafo.</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-sm border border-stone-100">
              <h4 class="font-bold text-xl text-clay-dark mb-2">¿Cómo hacían fuego?</h4>
              <p class="text-stone-600">Haremos fuego a partir de elementos vegetales, tal y como lo hacían los grupos cazadores recolectores.</p>
            </div>
            
             <div class="bg-white p-6 rounded-lg shadow-sm border border-stone-100">
              <h4 class="font-bold text-xl text-clay-dark mb-2">¿Tenían música?</h4>
              <p class="text-stone-600">Mostraremos réplicas de instrumentos hallados en yacimientos españoles y franceses y los haremos sonar.</p>
            </div>

            <div class="bg-white p-6 rounded-lg shadow-sm border border-stone-100">
              <h4 class="font-bold text-xl text-clay-dark mb-2">¿Cómo cazaban?</h4>
              <p class="text-stone-600">Los alumnos verán réplicas de armas paleolíticas y neolíticas y se convertirán en cazadores lanzando azagayas.</p>
            </div>
          </div>
        </div>

        <div class="border-t border-stone-200 pt-8">
           <h3 class="text-2xl font-serif font-bold text-stone-800 mb-4">Confían en nosotros</h3>
           <ul class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-sm text-stone-600">
             <li>IES Altaia (Altea)</li>
             <li>IES Bellaguarda (Altea)</li>
             <li>CP El Blanquinal (Altea)</li>
             <li>IES l’Almadrava (Benidorm)</li>
             <li>IES Arabí (Alfas del Pí)</li>
             <li>IES Alto Turia (Chelva)</li>
             <li>CP Santísimo Cristo del Buen Acierto</li>
             <li>IES Vicent Andrés Estellés</li>
             <li>IES Balears (Valencia)</li>
             <li>IES Gaia (Alicante)</li>
             <li>CP El Planet (Altea)</li>
             <li>AIS Altea International School</li>
             <li>Ayuntamiento de Altea</li>
             <li>ONG De Amicita</li>
           </ul>
        </div>
      </div>
    `
  },
  {
    id: 'campamento-arqueologia',
    title: 'Campamento Arqueología',
    description: 'Pedra Tallada realiza todos los veranos el CAMPAMENTO de ARQUEO-ESTIU en la finca Santa Bárbara, Altea la Vieja.',
    image: archCamp,
    tags: ['Verano', 'Campamento', 'Exterior'],
    date: 'Julio (Anual)',
    content: '', // Deprecated, keep for fallbacks if needed or remove if safe. I'll remove it and rely on logic.
    content_es: `
      <div class="space-y-8">
        <div class="bg-clay-light/10 p-6 rounded-xl border border-clay-light/30">
          <h3 class="text-xl font-bold text-clay-dark mb-2">ARQUEO-ESTIU</h3>
          <ul class="space-y-2 text-stone-800 font-medium">
             <li>📅 Durante el mes de Julio</li>
             <li>👶 Para jóvenes de 10 a 17 años</li>
             <li>📍 Finca Santa Bárbara, Altea la Vieja</li>
             <li>🏛️ Organiza: Pedra tallada y Ayuntamiento de Altea</li>
          </ul>
        </div>

        <div>
           <h2 class="text-3xl font-serif font-bold text-stone-900 mb-6">¿Qué hacemos?</h2>
           
           <div class="space-y-6">
             <div>
                <h4 class="text-xl font-bold text-stone-800">Cabañas Mesolíticas</h4>
                <p class="text-stone-600">Recreamos modelos de cabaña neolítica de tipo semicircular fabricadas con caña desde cero, que serán los lugares de referencia de cada grupo.</p>
             </div>
             
             <div>
                <h4 class="text-xl font-bold text-stone-800">Excavación Arqueológica</h4>
                <p class="text-stone-600">Espacio de excavación artificial con materiales enterrados que simulan distintas etapas. Aprenderemos a excavar, coordinar, dibujar material y restaurar.</p>
             </div>

             <div>
                <h4 class="text-xl font-bold text-stone-800">Carreras de Obstáculos</h4>
                <p class="text-stone-600">Pruebas físicas en la finca: tirolina, pasarela de cuerdas, paso del río, salto sobre troncos, entre otras.</p>
             </div>

             <div>
                <h4 class="text-xl font-bold text-stone-800">Cerámica Neolítica</h4>
                <p class="text-stone-600">Fabricamos recipientes neolíticos a partir de arcilla utilizando las mismas técnicas de fabricación, modelado y decoración que en el Neolítico.</p>
             </div>
             
             <div>
                <h4 class="text-xl font-bold text-stone-800">Talleres de Apicultura y Entomología</h4>
                <p class="text-stone-600">Enseñamos la vida de los insectos que nos rodean y su importancia para nuestro ecosistema.</p>
             </div>

             <div>
                <h4 class="text-xl font-bold text-stone-800">Olimpiadas y Bioblitz</h4>
                <p class="text-stone-600">Olimpiadas de habilidades humanas (equilibrio, orientación, fuerza) e inventario de especies naturales (Bioblitz) de la Finca Santa Bárbara.</p>
             </div>
           </div>
        </div>
      </div>
    `,
    content_en: `
      <div class="space-y-8">
        <div class="bg-clay-light/10 p-6 rounded-xl border border-clay-light/30">
          <h3 class="text-xl font-bold text-clay-dark mb-2">ARQUEO-ESTIU (SUMMER ARCHAEOLOGY)</h3>
          <ul class="space-y-2 text-stone-800 font-medium">
             <li>📅 During July</li>
             <li>👶 For youths aged 10 to 17</li>
             <li>📍 Santa Bárbara Estate, Altea la Vieja</li>
             <li>🏛️ Organized by: Pedra Tallada and Altea City Council</li>
          </ul>
        </div>

        <div>
           <h2 class="text-3xl font-serif font-bold text-stone-900 mb-6">What do we do?</h2>
           
           <div class="space-y-6">
             <div>
                <h4 class="text-xl font-bold text-stone-800">Mesolithic Huts</h4>
                <p class="text-stone-600">We recreate models of semicircular Neolithic huts made from cane, serving as the base for each group.</p>
             </div>
             
             <div>
                <h4 class="text-xl font-bold text-stone-800">Archaeological Excavation</h4>
                <p class="text-stone-600">Artificial excavation area with buried materials simulating different eras. We learn to dig, coordinate, draw findings, and restore.</p>
             </div>

             <div>
                <h4 class="text-xl font-bold text-stone-800">Obstacle Courses</h4>
                <p class="text-stone-600">Physical challenges on the estate: zip line, rope bridge, river crossing, log jumping, and more.</p>
             </div>

             <div>
                <h4 class="text-xl font-bold text-stone-800">Neolithic Pottery</h4>
                <p class="text-stone-600">We make Neolithic pots from clay using the same manufacturing, modeling, and decorating techniques as in the Neolithic period.</p>
             </div>
             
             <div>
                <h4 class="text-xl font-bold text-stone-800">Beekeeping and Entomology Workshops</h4>
                <p class="text-stone-600">We teach about the life of insects around us and their importance to our ecosystem.</p>
             </div>

             <div>
                <h4 class="text-xl font-bold text-stone-800">Olympics and Bioblitz</h4>
                <p class="text-stone-600">Olympics of human skills (balance, orientation, strength) and a natural species inventory (Bioblitz) of the Santa Bárbara Estate.</p>
             </div>
           </div>
        </div>
      </div>
    `,
    content_ca: `
      <div class="space-y-8">
        <div class="bg-clay-light/10 p-6 rounded-xl border border-clay-light/30">
          <h3 class="text-xl font-bold text-clay-dark mb-2">ARQUEO-ESTIU</h3>
          <ul class="space-y-2 text-stone-800 font-medium">
             <li>📅 Durant el mes de Juliol</li>
             <li>👶 Per a joves de 10 a 17 anys</li>
             <li>📍 Finca Santa Bàrbara, Altea la Vella</li>
             <li>🏛️ Organitza: Pedra Tallada i l'Ajuntament d'Altea</li>
          </ul>
        </div>

        <div>
           <h2 class="text-3xl font-serif font-bold text-stone-900 mb-6">Què fem?</h2>
           
           <div class="space-y-6">
             <div>
                <h4 class="text-xl font-bold text-stone-800">Cabanes Mesolítiques</h4>
                <p class="text-stone-600">Recreem models de cabana neolítica de tipus semicircular fabricades amb canya des de zero, que seran els llocs de referència de cada grup.</p>
             </div>
             
             <div>
                <h4 class="text-xl font-bold text-stone-800">Excavació Arqueològica</h4>
                <p class="text-stone-600">Espai d'excavació artificial amb materials enterrats que simulen diferents etapes. Aprendrem a excavar, coordinar, dibuixar material i restaurar.</p>
             </div>

             <div>
                <h4 class="text-xl font-bold text-stone-800">Curses d'Obstacles</h4>
                <p class="text-stone-600">Proves físiques a la finca: tirolina, passarel·la de cordes, pas del riu, salt sobre troncs, entre d'altres.</p>
             </div>

             <div>
                <h4 class="text-xl font-bold text-stone-800">Ceràmica Neolítica</h4>
                <p class="text-stone-600">Fabriquem recipients neolítics a partir d'argila utilitzant les mateixes tècniques de fabricació, modelatge i decoració que al Neolític.</p>
             </div>
             
             <div>
                <h4 class="text-xl font-bold text-stone-800">Tallers d'Apicultura i Entomologia</h4>
                <p class="text-stone-600">Ensenyem la vida dels insectes que ens envolten i la seva importància per al nostre ecosistema.</p>
             </div>

             <div>
                <h4 class="text-xl font-bold text-stone-800">Olimpíades i Bioblitz</h4>
                <p class="text-stone-600">Olimpíades d'habilitats humanes (equilibri, orientació, força) i inventari d'espècies naturals (Bioblitz) de la Finca Santa Bàrbara.</p>
             </div>
           </div>
        </div>
      </div>
    `
  },
  {
    id: 'museos',
    title: 'Museos y Patrimonio',
    description: 'Llevamos la arqueología fuera de los laboratorios y excavaciones, acercándola al público a través de la divulgación científica y la arqueología experimental.',
    image: headBone,
    tags: ['Museos', 'Patrimonio', 'Consultoría'],
    date: 'Permanente',
    content: `
      <div class="space-y-8">
        <div>
          <h3 class="text-2xl font-serif font-bold text-stone-800 mb-4">Actividades de Divulgación</h3>
          <p class="text-stone-700 leading-relaxed">
            Ofrecemos a museos y centros culturales talleres, demostraciones y actividades participativas diseñadas para acercar el pasado a visitantes de todas las edades de una forma rigurosa, dinámica y memorable.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8">
           <div>
              <h4 class="font-bold text-xl text-stone-900 mb-4">¿Qué ofrecemos?</h4>
              <ul class="space-y-3 text-stone-600">
                <li class="flex gap-2"><span class="text-clay font-bold">•</span> Talleres didácticos de arqueología y prehistoria (Talla lítica, fuego, cerámica, arte rupestre).</li>
                <li class="flex gap-2"><span class="text-clay font-bold">•</span> Demostraciones arqueológicas en vivo de procesos reales de fabricación.</li>
                <li class="flex gap-2"><span class="text-clay font-bold">•</span> Actividades participativas vinculadas a exposiciones temporales.</li>
                <li class="flex gap-2"><span class="text-clay font-bold">•</span> Proyectos educativos personalizados coordinados con el equipo técnico del museo.</li>
              </ul>
           </div>

           <div>
              <h4 class="font-bold text-xl text-stone-900 mb-4">¿Por qué colaborar con nosotros?</h4>
              <ul class="space-y-3 text-stone-600">
                <li class="flex gap-2"><span class="text-clay font-bold">✓</span> Actividades adaptables a todo tipo de espacios expositivos.</li>
                <li class="flex gap-2"><span class="text-clay font-bold">✓</span> Profesionales especializados en arqueología experimental y docencia.</li>
                <li class="flex gap-2"><span class="text-clay font-bold">✓</span> Programas multilingües (castellano, valenciano, inglés e italiano).</li>
                <li class="flex gap-2"><span class="text-clay font-bold">✓</span> Posibilidad de integración en ciclos culturales o jornadas temáticas.</li>
              </ul>
           </div>
        </div>
      </div>
    `
  }
];
