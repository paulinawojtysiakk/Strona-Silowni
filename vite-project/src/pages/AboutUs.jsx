import React from "react";
import "/src/scss/AboutUs.scss";
import emptygym from "../images/emptygym.jpeg";

const AboutUs = () => {
  return (
    <div className="container about-us-container">

      <div className="about-us-text">
        <div>
          <img src={emptygym} alt="gym" className="gym-img"/>
        </div>

        <ul className="about-us-description">
          Jesteśmy siłownią działającą na terenie Krościenka nad Dunajcem od
          2022 roku.
          <li>
            Mamy ponad 13 lat bogatego doświadczenia w spersonalizowanych
            treningach oraz 14 trenerów na dowiedzenie swoich przekonań!
          </li>
          <li>
            Nasz klub fitness oferuje również szerokie wsparcie trenerów
            personalnych, którzy mogą wspomóc każdego przy podstawowych i
            bardziej zaawansowanych ćwiczeniach z maszynami, ale również ułożyć
            plan treningowy w długim terminie.
          </li>
          <li>
            Całą ofertę treningową personalną, grupową oraz karnety tygodniowe,
            miesięczne i w różnych wariantach godzinowych możesz omówić z nami
            przez telefon, dograć szczegóły, a my wyślemy Ci całą ofertę
            mailowo!
          </li>
        </ul>
      </div>

      <div className="blog-training-container">
        <h4 className="about-us-title-top"> Nasze Porady Treningowe</h4>
        <h5 className="about-us-title">
          1. Dostosuj swój trening do zamierzonego celu
        </h5>
        <p>
          Najważniejszym krokiem osób początkujących jest określenie swoich
          priorytetów treningowych i dopasowanie do nich rutyny treningowej.
          Może brzmieć to prozaicznie, jednak jak wskazują obserwacje na wielu
          siłowniach, trenujący nie zawsze są w stanie odpowiedzieć
          instruktorowi po co właściwie przyszli na siłownię. Zamiast operować
          oderwanymi od kontekstu zdaniami o poprawie zdrowia, samopoczucia i
          lepszym wyglądzie, należy zadać sobie proste pytanie: „Co chcę tutaj
          osiągnąć i jak się do tego zabrać?” Jeżeli chcemy zrzucić nadmiar
          tkanki tłuszczowej, to nastawiamy się na średnio-intensywny trening
          obwodowy z dodatkiem elementów cardio. Jeżeli chcemy zajmować czołowe
          miejsca w różnego rodzaju biegach, to nie będziemy dźwigać 150kg na
          przysiad, tylko skoncentrujemy się na treningu uzupełniającym treningi
          biegowe. Natomiast jeżeli celem jest budowa muskularnej sylwetki –
          trening na mase będzie najlepszym wyborem.
        </p>

        <h5 className="about-us-title">2. Opanuj poprawną technikę </h5>
        <p>
          Bez znajomości poprawnej techniki wykonywania ćwiczeń nie ma nawet
          mowy o tym, by udało się nam doprowadzić ciało do jakiejkolwiek formy.
          Treningi siłowe bazują na kilkudziesięciu latach doświadczeń, badań i
          ogromnych nakładach finansowych, efektem których jest dzisiejszy stan
          wiedzy, z której dzisiaj możemy korzystać. Ciężkie treningi i godziny
          spędzone na siłowni nie przyniosą większych efektów bez opanowania
          m.in.: techniki ruchu, prawidłowego oddechu, generowania i
          odpuszczania napięcia, odpowiedniego dostosowania tempa ćwiczenia.
          Drugim aspektem omawianego tematu jest kwestia ograniczania
          kontuzjogenności ćwiczeń dzięki właściwej technice. Poprawna technika
          przyspieszy nie tylko efekty treningowe, ale także gwarantuje
          profilaktykę prozdrowotną.
        </p>

        <h5 className="about-us-title">
          3. Opieraj swoje plany treningowe na dobrze znanych Ci ćwiczeniach
        </h5>
        <p>
          Plan treningowy powinien opierać się na ćwiczeniach dobrze znanych i
          opanowanych. Te które są nowością, powinniśmy ćwiczyć i doskonalić.
          Niepoprawna technika osłabia efektywność treningu, a także powoduje
          kontuzje. Przykładem niech będzie jedno z najważniejszych ćwiczeń
          siłowych- przysiad. Ludzie nieobeznani z jego prawidłową formą
          wykazują tendencje m.in. do uciekania kolanami do wewnątrz, co
          sprawia, że staw kolanowy nie pracuje prawidłowo. A mimo wszystko
          ćwiczenie jest przez nich wykonywane. Inną sprawą jest nauka nowych
          rzeczy i opanowywanie techniki, co należy do obowiązków każdego
          ćwiczącego, który nastawia się na efekty. Ten proces z kolei należy
          przeprowadzić pod okiem trenera personalnego, który będzie w stanie
          poprawić nas na bieżąco i kontrolować.
        </p>

        <h5 className="about-us-title">
          4. Przychodź na siłownię przygotowanym
        </h5>
        <p>
          Siłownia wymaga od nas zdecydowania i jasno określonych zamiarów.
          Ograniczenie czasowe każdego treningu – nie każdy ma cały dzień na
          trening. Przerwy na zastanawianie się czy bezcelowe orbitowanie wokół
          sprzętu, m.in. powodują obniżenie tętna i możliwości treningowych
          mięśni. Pamiętać należy, że zazwyczaj na siłowni nie jesteśmy sami.
          Gdy stanowisko, na którym chcieliśmy wykonać ćwiczenie jest zajęte,
          jesteśmy w stanie zająć się na ten czas innym programowym ćwiczeniem.
        </p>

        <h5 className="about-us-title">5. Bądź konsekwentny</h5>
        <p>
          Trening siłowy porównać można np. do podróży, w trakcie której
          przychodzi się nam mierzyć z przeszkodami:
            <br />
            - zewnętrznymi (czas, praca, obowiązki rodzinne)<br/>
            - wewnętrznymi (kontuzje, przeciążenie i zmęczenie).<br/>
      
          Droga do sukcesu jest długa i wyczerpująca, a nic nie przychodzi
          szybko i łatwo. Kluczem do wyników jest siła naszego samozaparcia i
          wszystkie czynniki, które ją potęgują. Tak więc nawet w chwili
          zastoju, regresów czy spadków masy nie należy się poddawać i trzeba
          walczyć dalej.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
