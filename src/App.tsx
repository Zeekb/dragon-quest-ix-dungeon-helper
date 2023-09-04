import React from 'react'
import './App.css'

//TODO: add tags to each map
//TODO: add tags to areas?
//TODO: overlay svg for map with number?
//TODO: add search box
//TODO: fix layout
//TODO: fix style

function App() {
  return (
    <div className="App">
      <div className="itemmap">
        <img width="100%" src="item_map.webp" alt="items" />
      </div>
      <div>
        <section>
          <p>Chest contents:</p>
          <li>
            <div className="rank">
              <ul>Rank 1:</ul>
              <ul>Medicinal herb (25%)</ul>
              <ul>Antidotal herb (20%)</ul>
              <ul>Moonwort bulb (10%)</ul>
              <ul>Holy water (10%)</ul>
              <ul>Chimaera wing (10%)</ul>
              <ul>Iron nails (5%)</ul>
              <ul>Sandals (5%)</ul>
              <ul>Cotton gloves (5%)</ul>
              <ul>Plain clothes (5%)</ul>
              <ul>18G (5%)</ul>
            </div>
            <div className="rank">
              <ul>Rank 2:</ul>
              <ul>Medicinal herb (15%)</ul>
              <ul>Antidotal herb (10%)</ul>
              <ul>Moonwort bulb (10%)</ul>
              <ul>Strong medicine (10%)</ul>
              <ul>Chimaera wing (10%)</ul>
              <ul>Angel bell (10%)</ul>
              <ul>Coagulant (10%)</ul>
              <ul>52G (7%)</ul>
              <ul>Gleeban groat (5%)</ul>
              <ul>Paring knife (5%)</ul>
              <ul>Leather shoes (5%)</ul>
              <ul>Magic water (3%)</ul>
            </div>
            <div className="rank">
              <ul>Rank 3:</ul>
              <ul>Iron nails (10%)</ul>
              <ul>Gleeban groat (10%)</ul>
              <ul>Magic water (10%)</ul>
              <ul>240G (10%)</ul>
              <ul>Tortoiseshell (8%)</ul>
              <ul>Toad oil (8%)</ul>
              <ul>Mystifying mixture (7%)</ul>
              <ul>Strong medicine (5%)</ul>
              <ul>Evac-u-bell (5%)</ul>
              <ul>Strong antidote (5%)</ul>
              <ul>Gold bracer (5%)</ul>
              <ul>Resurrock (5%)</ul>
              <ul>Gleeban guinea (5%)</ul>
              <ul>Mini medal (5%)</ul>
              <ul>Sage's elixir (2%)</ul>
            </div>
            <div className="rank">
              <ul>Rank 4:</ul>
              <ul>Cannibox (10%)</ul>
              <ul>Special medicine (10%)</ul>
              <ul>Mini medal (10%)</ul>
              <ul>Gleeban groat (10%)</ul>
              <ul>Magic water (10%)</ul>
              <ul>Finessence (5%)</ul>
              <ul>Ultramarine mittens (5%)</ul>
              <ul>Sorcerer's stone (5%)</ul>
              <ul>Gold rosary (5%)</ul>
              <ul>Iron ore (5%)</ul>
              <ul>Gleeban guinea (5%)</ul>
              <ul>Sage's elixir (5%)</ul>
              <ul>525G (5%)</ul>
              <ul>Silver platter (5%)</ul>
              <ul>Aggressence (5%)</ul>
            </div>
            <div className="rank">
              <ul>Rank 5:</ul>
              <ul>Mimic (10%)</ul>
              <ul>Panacea (10%)</ul>
              <ul>Mini medal (10%)</ul>
              <ul>Gleeban guinea (10%)</ul>
              <ul>Sage's elixir (8%)</ul>
              <ul>Prayer ring (5%)</ul>
              <ul>Einhänder (5%)</ul>
              <ul>1000G (5%)</ul>
              <ul>Gleeban gold piece (5%)</ul>
              <ul>Agility ring (5%)</ul>
              <ul>Yggdrasil leaf (5%)</ul>
              <ul>Resurrock (5%)</ul>
              <ul>Strength ring (5%)</ul>
              <ul>Hephaestus' flame (5%)</ul>
              <ul>Gold rosary (5%)</ul>
              <ul>Reckless necklace (2%)</ul>
            </div>
          </li>

          <div>
            <table>
              <tr>
                <th>[rank]</th>
                <th>location</th>
              </tr>
              <tr>
                <td>[4]</td>
                <td>
                  {' '}
                  Tower of Trades - <b>4F</b>
                </td>
              </tr>
              <tr>
                <td>[4]</td>
                <td>
                  {' '}
                  The Bad Cave - <b>B2</b>
                </td>
              </tr>
              <tr>
                <td>[4]</td>
                <td>
                  The Plumbed Depths - <b>B1</b> - <b>B2 right</b>, left chest
                </td>
              </tr>
              <tr>
                <td>[4]</td>
                <td>
                  Gerzuun - <b>high area</b> (right lower) - <b>high area</b>
                  (left upper)
                </td>
              </tr>
              <tr>
                <td>[4]</td>
                <td>
                  Bowhole - <b>outside</b>, southeast - <b>outside</b>, east
                  end, left - <b>B1</b> southwest - <b>B2</b> southeast
                </td>
              </tr>
              <tr>
                <td>[4]</td>
                <td>
                  Gittingham Palace - <b>L1 North</b>, right - <b>L1 North</b>,
                  middle
                </td>
              </tr>
              <tr>
                <td>[4]</td>
                <td>
                  Realm of the Mighty - <b>L1</b> (in right door) - <b>L2</b> -
                  <b>L3</b> - <b>Outside</b> (from L4)
                </td>
              </tr>
              <tr>
                <td>[4]</td>
                <td>
                  Tower of Nod - <b>5F</b>
                </td>
              </tr>
              <tr>
                <td>[5]</td>
                <td>
                  Bowhole - <b>outside</b>, east end, right - <b>B1</b>
                  northwest - <b>B2</b> northwest - <b>B3</b>
                </td>
              </tr>
              <tr>
                <td>[5]</td>
                <td>
                  Gittingham Palace - <b>L1</b> North, left - <b>Oubliette</b> -
                  B6
                </td>
              </tr>
              <tr>
                <td>[5]</td>
                <td>
                  Realm of the Mighty - <b>L5</b> - <b>L6</b> - <b>Outside</b>
                  (from L6)
                </td>
              </tr>
              <tr>
                <td>[5]</td>
                <td>
                  Tower of Nod - <b>1F</b> - <b>3F</b> - <b>6F</b>
                </td>
              </tr>
            </table>
          </div>
          <p>Ranks of pots: Totals are in brackets []</p>
          <li>
            <div className="rank">
              <ul>Rank 1: [20%]</ul>
              <ul> 2G (10%)</ul>
              <ul>Medicinal herb (10%)</ul>
            </div>
            <div className="rank">
              <ul>Rank 2: [30%]</ul>
              <ul> 5G (10%)</ul>
              <ul>Medicinal herb (15%)</ul>
              <ul>Antidotal herb (5%)</ul>
            </div>
            <div className="rank">
              <ul>Rank 3: [30%]</ul>
              <ul> 2G (10%)</ul>
              <ul>4G (10%)</ul>
              <ul>8G (5%)</ul>
              <ul>12G (5%)</ul>
            </div>
            <div className="rank">
              <ul>Rank 4: [40%]</ul>
              <ul> Medicinal herb (12%)</ul>
              <ul>Antidotal herb (8%)</ul>
              <ul>16G (5%)</ul>
              <ul>Moonwort bulb (5%)</ul>
              <ul>Evac-u-bell (5%)</ul>
              <ul>Chimaera wing (5%)</ul>
            </div>
            <div className="rank">
              <ul>Rank 5: [50%]</ul>
              <ul> Medicinal herb (12%)</ul>
              <ul>Antidotal herb (8%)</ul>
              <ul>Moonwort bulb (5%)</ul>
              <ul>48G (5%)</ul>
              <ul>Evac-u-bell (5%)</ul>
              <ul>Chimaera wing (5%)</ul>
              <ul>Angel bell (5%)</ul>
              <ul>Strong medicine (5%)</ul>
            </div>
            <div className="rank">
              <ul>Rank 6: [40%]</ul>
              <ul> Cowpat (20%)</ul>
              <ul>Horse manure (20%)</ul>
            </div>
            <div className="rank">
              <ul>Rank 7: [50%]</ul>
              <ul>Wing of bat (10%)</ul>
              <ul>Tortoiseshell (10%)</ul>
              <ul>Toad oil (10%)</ul>
              <ul>Lambswool (10%)</ul>
              <ul>Snakeskin (10%)</ul>
            </div>
            <div className="rank">
              <ul>Rank 8: [50%]</ul>
              <ul> Strong medicine (10%)</ul>
              <ul>Special medicine (5%)</ul>
              <ul>Strong antidote (10%)</ul>
              <ul>Special antidote (5%)</ul>
              <ul>Magic water (5%)</ul>
              <ul>Sage's elixir (5%)</ul>
              <ul>Angel bell (5%)</ul>
              <ul>Mini medal (5%)</ul>
            </div>
            <div className="rank">
              <ul>Rank 9: [40%]</ul>
              <ul> Gleeban groat (10%)</ul>
              <ul>120G (10%)</ul>
              <ul>Resurrock (10%)</ul>
              <ul>Mini medal (10%)</ul>
            </div>
            <div className="rank">
              <ul>Rank 10 [50%]:</ul>
              <ul> Lava lump (5%)</ul>
              <ul>Fresh water (5%)</ul>
              <ul>Flurry feather (5%)</ul>
              <ul>Royal soil (5%)</ul>
              <ul>Ice crystal (5%)</ul>
              <ul>Thunderball (5%)</ul>
              <ul>Evencloth (5%)</ul>
              <ul>Brighten rock (5%)</ul>
              <ul>Resurrock (5%)</ul>
              <ul>Mini medal (5%)</ul>
            </div>
            <div className="rank">
              <ul>Rank 11 [50%]:</ul>
              <ul> Cotton gloves (20%)</ul>
              <ul>Cotton trousers (15%)</ul>
              <ul>Plain clothes (15%)</ul>
            </div>
            <div className="rank">
              <ul>Rank 12 [30%]:</ul>
              <ul> Sandals (15%)</ul>
              <ul>Pop socks (5%)</ul>
              <ul>Hairband (10%)</ul>
            </div>
            <div className="rank">
              <ul>Rank 13 [50%]:</ul>
              <ul> Leather shoes (15%)</ul>
              <ul>Boxer shorts (15%)</ul>
              <ul>Bandana (20%)</ul>
            </div>
            <div className="rank">
              <ul>Rank 14 [50%]:</ul>
              <ul> 2G (15%)</ul>
              <ul>5G (15%)</ul>
              <ul>10G (10%)</ul>
              <ul>15G (5%)</ul>
              <ul>30G (5%)</ul>
            </div>
            <div className="rank">
              <ul>Rank 15 [30%]:</ul>
              <ul> Plain clothes (10%)</ul>
              <ul>Wayfarer's clothes (5%)</ul>
              <ul>Silk robe (5%)</ul>
              <ul>Springtime skirt (5%)</ul>
              <ul>Leather hat (5%)</ul>
            </div>
            <div className="rank">
              <ul>Rank 16 [50%]:</ul>
              <ul> Medicinal herb (15%)</ul>
              <ul>Antidotal herb (10%)</ul>
              <ul>Moonwort bulb (10%)</ul>
              <ul>Holy water (5%)</ul>
              <ul>Chimaera wing (10%)</ul>
            </div>
            <div className="rank">
              <ul>Rank 17 [25%]:</ul>
              <ul> Silver bracelets (5%)</ul>
              <ul>Gold bracer (5%)</ul>
              <ul>Slime earrings (5%)</ul>
              <ul>Gold ring (5%)</ul>
              <ul>Bunny tail (5%)</ul>
            </div>
            <div className="rank">
              <ul>Rank 18 [40%]:</ul>
              <ul> Boxer shorts (10%)</ul>
              <ul>Cotton gloves (10%)</ul>
              <ul>Linen gloves (5%)</ul>
              <ul>Leather gloves (5%)</ul>
              <ul>Rubber gloves (5%)</ul>
              <ul>Mini medal (5%)</ul>
            </div>
            <div className="rank">
              <ul>Rank 19 [30%]:</ul>
              <ul> Leather dress (5%)</ul>
              <ul>Dancer's costume (5%)</ul>
              <ul>Garish garb (5%)</ul>
              <ul>Feathered cap (5%)</ul>
              <ul>Fur hood (5%)</ul>
              <ul>Leather kilt (5%)</ul>
            </div>
            <div className="rank">
              <ul>Rank 20 [50%]:</ul>
              <ul> 12G (20%)</ul>
              <ul>40G (15%)</ul>
              <ul>120G (5%)</ul>
              <ul>240G (5%)</ul>
              <ul>Mini medal (5%)</ul>
            </div>
          </li>
        </section>
      </div>
      <div className="area">
        <img src="./areas/a1.png" alt="a1" />
      </div>
      <div className="map">
        <img src="./maps/02.png" alt="02" />
        <img src="./maps/86.png" alt="86" />
        <img src="./maps/04.png" alt="04" />
        <img src="./maps/01.png" alt="01" />
        <img src="./maps/03.png" alt="03" />
      </div>
      <div className="area">
        <img src="./areas/a2.png" alt="a2" />
      </div>
      <div className="map">
        <img src="./maps/07.png" alt="07" />
        <img src="./maps/05.png" alt="05" />
        <img src="./maps/06.png" alt="06" />
        <img src="./maps/08.png" alt="08" />
      </div>
      <div className="area">
        <img src="./areas/a3.png" alt="a3" />
      </div>
      <div className="map">
        <img src="./maps/0a.png" alt="0a" />
        <img src="./maps/0b.png" alt="0b" />
        <img src="./maps/88.png" alt="88" />
        <img src="./maps/09.png" alt="09" />
        <img src="./maps/87.png" alt="87" />
      </div>
      <div className="area">
        <img src="./areas/a4.png" alt="a4" />
      </div>
      <div className="map">
        <img src="./maps/0f.png" alt="0f" />
        <img src="./maps/0e.png" alt="0e" />
        <img src="./maps/10.png" alt="10" />
        <img src="./maps/0c.png" alt="0c" />
        <img src="./maps/0d.png" alt="0d" />
      </div>
      <div className="area">
        <img src="./areas/a5.png" alt="a5" />
      </div>
      <div className="map">
        <img src="./maps/13.png" alt="13" />
        <img src="./maps/12.png" alt="12" />
        <img src="./maps/11.png" alt="11" />
      </div>
      <div className="area">
        <img src="./areas/a6.png" alt="a6" />
      </div>
      <div className="map">
        <img src="./maps/17.png" alt="17" />
        <img src="./maps/16.png" alt="16" />
        <img src="./maps/14.png" alt="14" />
        <img src="./maps/15.png" alt="15" />
        <img src="./maps/18.png" alt="18" />
      </div>
      <div className="area">
        <img src="./areas/a7.png" alt="a7" />
      </div>
      <div className="map">
        <img src="./maps/19.png" alt="19" />
        <img src="./maps/89.png" alt="89" />
        <img src="./maps/8a.png" alt="8a" />
        <img src="./maps/1c.png" alt="1c" />
        <img src="./maps/1b.png" alt="1b" />
        <img src="./maps/1a.png" alt="1a" />
        <img src="./maps/68.png" alt="68" />
      </div>
      <div className="area">
        <img src="./areas/a8.png" alt="a8" />
      </div>
      <div className="map">
        <img src="./maps/1e.png" alt="1e" />
        <img src="./maps/1f.png" alt="1f" />
        <img src="./maps/1d.png" alt="1d" />
        <img src="./maps/8b.png" alt="8b" />
        <img src="./maps/8c.png" alt="8c" />
        <img src="./maps/20.png" alt="20" />
        <img src="./maps/21.png" alt="21" />
      </div>
      <div className="area">
        <img src="./areas/a9.png" alt="a9" />
      </div>
      <div className="map">
        <img src="./maps/22.png" alt="22" />
        <img src="./maps/23.png" alt="23" />
        <img src="./maps/24.png" alt="24" />
      </div>
      <div className="area">
        <img src="./areas/a10.png" alt="a10" />
      </div>
      <div className="map">
        <img src="./maps/27.png" alt="27" />
        <img src="./maps/26.png" alt="26" />
        <img src="./maps/25.png" alt="25" />
      </div>
      <div className="area">
        <img src="./areas/a11.png" alt="a11" />
      </div>
      <div className="map">
        <img src="./maps/2a.png" alt="2a" />
        <img src="./maps/28.png" alt="28" />
        <img src="./maps/29.png" alt="29" />
      </div>
      <div className="area">
        <img src="./areas/a12.png" alt="a12" />
      </div>
      <div className="map">
        <img src="./maps/2b.png" alt="2b" />
        <img src="./maps/2e.png" alt="2e" />
        <img src="./maps/2c.png" alt="2c" />
        <img src="./maps/2f.png" alt="2f" />
        <img src="./maps/2d.png" alt="2d" />
      </div>
      <div className="area">
        <img src="./areas/a13.png" alt="a13" />
      </div>
      <div className="map">
        <img src="./maps/8f.png" alt="8f" />
        <img src="./maps/8e.png" alt="8e" />
        <img src="./maps/8d.png" alt="8d" />
        <img src="./maps/32.png" alt="32" />
        <img src="./maps/30.png" alt="30" />
        <img src="./maps/31.png" alt="31" />
      </div>
      <div className="area">
        <img src="./areas/a14.png" alt="a14" />
      </div>
      <div className="map">
        <img src="./maps/33.png" alt="33" />
      </div>
      <div className="area">
        <img src="./areas/a15.png" alt="a15" />
      </div>
      <div className="map">
        <img src="./maps/35.png" alt="35" />
        <img src="./maps/36.png" alt="36" />
        <img src="./maps/34.png" alt="34" />
        <img src="./maps/90.png" alt="90" />
        <img src="./maps/37.png" alt="37" />
        <img src="./maps/3a.png" alt="3a" />
        <img src="./maps/39.png" alt="39" />
        <img src="./maps/38.png" alt="38" />
      </div>
      <div className="area">
        <img src="./areas/a16.png" alt="a16" />
      </div>
      <div className="map">
        <img src="./maps/3d.png" alt="3d" />
        <img src="./maps/3e.png" alt="3e" />
        <img src="./maps/91.png" alt="91" />
        <img src="./maps/3c.png" alt="3c" />
        <img src="./maps/3b.png" alt="3b" />
      </div>
      <div className="area">
        <img src="./areas/a17.png" alt="a17" />
      </div>
      <div className="map">
        <img src="./maps/43.png" alt="43" />
        <img src="./maps/42.png" alt="42" />
        <img src="./maps/41.png" alt="41" />
        <img src="./maps/40.png" alt="40" />
        <img src="./maps/3f.png" alt="3f" />
      </div>
      <div className="area">
        <img src="./areas/a18.png" alt="a18" />
      </div>
      <div className="map">
        <img src="./maps/47.png" alt="47" />
        <img src="./maps/45.png" alt="45" />
        <img src="./maps/48.png" alt="48" />
        <img src="./maps/46.png" alt="46" />
        <img src="./maps/44.png" alt="44" />
      </div>
      <div className="area">
        <img src="./areas/a19.png" alt="a19" />
      </div>
      <div className="map">
        <img src="./maps/92.png" alt="92" />
        <img src="./maps/4b.png" alt="4b" />
        <img src="./maps/49.png" alt="49" />
        <img src="./maps/4a.png" alt="4a" />
      </div>
      <div className="area">
        <img src="./areas/a20.png" alt="a20" />
      </div>
      <div className="map">
        <img src="./maps/52.png" alt="52" />
        <img src="./maps/51.png" alt="51" />
        <img src="./maps/50.png" alt="50" />
        <img src="./maps/4f.png" alt="4f" />
        <img src="./maps/4e.png" alt="4e" />
        <img src="./maps/4d.png" alt="4d" />
        <img src="./maps/4c.png" alt="4c" />
      </div>
      <div className="area">
        <img src="./areas/a21.png" alt="a21" />
      </div>
      <div className="map">
        <img src="./maps/57.png" alt="57" />
        <img src="./maps/56.png" alt="56" />
        <img src="./maps/55.png" alt="55" />
        <img src="./maps/53.png" alt="53" />
        <img src="./maps/54.png" alt="54" />
      </div>
      <div className="area">
        <img src="./areas/a22.png" alt="a22" />
      </div>
      <div className="map">
        <img src="./maps/60.png" alt="60" />
        <img src="./maps/61.png" alt="61" />
        <img src="./maps/5f.png" alt="5f" />
        <img src="./maps/5a.png" alt="5a" />
        <img src="./maps/58.png" alt="58" />
        <img src="./maps/59.png" alt="59" />
        <img src="./maps/5b.png" alt="5b" />
      </div>
      <div className="area">
        <img src="./areas/a23.png" alt="a23" />
      </div>
      <div className="map">
        <img src="./maps/5c.png" alt="5c" />
        <img src="./maps/5e.png" alt="5e" />
        <img src="./maps/5d.png" alt="5d" />
      </div>
      <div className="area">
        <img src="./areas/a24.png" alt="a24" />
      </div>
      <div className="map">
        <img src="./maps/64.png" alt="64" />
        <img src="./maps/63.png" alt="63" />
        <img src="./maps/62.png" alt="62" />
      </div>
      <div className="area">
        <img src="./areas/a25.png" alt="a25" />
      </div>
      <div className="map">
        <img src="./maps/93.png" alt="93" />
        <img src="./maps/67.png" alt="67" />
        <img src="./maps/66.png" alt="66" />
        <img src="./maps/65.png" alt="65" />
      </div>
      <div className="area">
        <img src="./areas/a26.png" alt="a26" />
      </div>
      <div className="map">
        <img src="./maps/6c.png" alt="6c" />
        <img src="./maps/6b.png" alt="6b" />
        <img src="./maps/69.png" alt="69" />
        <img src="./maps/6a.png" alt="6a" />
        <img src="./maps/94.png" alt="94" />
      </div>
      <div className="area">
        <img src="./areas/a27.png" alt="a27" />
      </div>
      <div className="map">
        <img src="./maps/70.png" alt="70" />
        <img src="./maps/71.png" alt="71" />
        <img src="./maps/6d.png" alt="6d" />
        <img src="./maps/6f.png" alt="6f" />
        <img src="./maps/95.png" alt="95" />
        <img src="./maps/6e.png" alt="6e" />
      </div>
      <div className="area">
        <img src="./areas/a28.png" alt="a28" />
      </div>
      <div className="map">
        <img src="./maps/72.png" alt="72" />
        <img src="./maps/73.png" alt="73" />
      </div>
      <div className="area">
        <img src="./areas/a29.png" alt="a29" />
      </div>
      <div className="map">
        <img src="./maps/76.png" alt="76" />
        <img src="./maps/77.png" alt="77" />
        <img src="./maps/74.png" alt="74" />
        <img src="./maps/7c.png" alt="7c" />
        <img src="./maps/7b.png" alt="7b" />
        <img src="./maps/96.png" alt="96" />
        <img src="./maps/75.png" alt="75" />
      </div>
      <div className="area">
        <img src="./areas/a30.png" alt="a30" />
      </div>
      <div className="map">
        <img src="./maps/7a.png" alt="7a" />
        <img src="./maps/79.png" alt="79" />
        <img src="./maps/78.png" alt="78" />
      </div>
      <div className="area">
        <img src="./areas/a31.png" alt="a31" />
      </div>
      <div className="map">
        <img src="./maps/7e.png" alt="7e" />
        <img src="./maps/7f.png" alt="7f" />
        <img src="./maps/80.png" alt="80" />
        <img src="./maps/7d.png" alt="7d" />
      </div>
      <div className="area">
        <img src="./areas/a32.png" alt="a32" />
      </div>
      <div className="map">
        <img src="./maps/81.png" alt="81" />
        <img src="./maps/83.png" alt="83" />
        <img src="./maps/82.png" alt="82" />
      </div>
      <div className="area">
        <img src="./areas/a33.png" alt="a33" />
      </div>
      <div className="map">
        <img src="./maps/85.png" alt="85" />
        <img src="./maps/84.png" alt="84" />
      </div>
    </div>
  )
}

export default App
