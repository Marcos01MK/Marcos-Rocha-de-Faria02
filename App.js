import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, } from 'react-native';

const jogadores = [
  {
    nome: 'Pelé',
    sexo: 'Masculino',
    nascimento: '1940-10-23',
    cidade: 'Três Corações, Brasil',
    imagem: 'https://s2-oglobo.glbimg.com/mUGG8K9PnlnVKWT-Z8hIqYTWH9M=/0x0:5000x3432/924x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_da025474c0c44edd99332dddb09cabe8/internal_photos/bs/2022/A/4/9A5ow5TP6l0L94EAJWXg/101578473-files-in-this-file-photo-taken-on-march-09-2014-brazilian-football-legend-pele-poses-w.jpg',
    biografia:
      'Pelé é amplamente reconhecido como o maior jogador de futebol da história. Com três Copas do Mundo, ele encantou gerações com sua habilidade, carisma e paixão pelo esporte. Foi um verdadeiro embaixador do futebol mundial.',
    times: [
      { nome: 'Santos', data: '1956-1974' },
      { nome: 'New York Cosmos', data: '1975-1977' },
    ],
  },
  {
    nome: 'Ronaldinho Gaúcho',
    sexo: 'Masculino',
    nascimento: '1980-03-21',
    cidade: 'Porto Alegre, Brasil',
    imagem: 'https://www.ogol.com.br/img/jogadores/new/07/72/772_ronaldinho_gaucho_20250217221818.jpg',
    biografia:
      'Ronaldinho foi um dos jogadores mais habilidosos que o mundo já viu. Com seu sorriso cativante e dribles mágicos, conquistou torcedores no Brasil, na Europa e no mundo inteiro. Venceu a Copa do Mundo em 2002.',
    times: [
      { nome: 'Grêmio', data: '1998-2001' },
      { nome: 'Barcelona', data: '2003-2008' },
      { nome: 'Milan', data: '2008-2011' },
      { nome: 'Flamengo', data: '2011-2012' },
      { nome: 'Atletico Mineiro', data: '2012-2014' },
      { nome: 'Queretaro', data: '2014-2015' },
      { nome: 'Fluminense', data: '2015' },
    ],
  },
  {
    nome: 'Neymar Jr.',
    sexo: 'Masculino',
    nascimento: '1992-02-05',
    cidade: 'Mogi das Cruzes, Brasil',
    imagem: 'https://i.pinimg.com/originals/0f/be/ac/0fbeac0b1525ffd016257f7813a5d4c6.jpg',
    biografia:
      'Neymar é um dos principais nomes do futebol contemporâneo. Seu estilo ousado e habilidade extraordinária o levaram a brilhar pelo Santos, Barcelona e PSG. Também é figura central na seleção brasileira atual.',
    times: [
      { nome: 'Santos', data: '2009-2013' },
      { nome: 'Barcelona', data: '2013-2017' },
      { nome: 'Paris Saint-Germain', data: '2017-2023' },
      { nome: 'Al-Hilal', data: '2023-2024' },
      { nome: 'Santos', data: '2025-' },
    ],
  },
  {
    nome: 'Zico',
    sexo: 'Masculino',
    nascimento: '1953-03-03',
    cidade: 'Rio de Janeiro, Brasil',
    imagem: 'https://images2.minutemediacdn.com/image/upload/c_crop,w_1997,h_2662,x_0,y_337/c_fill,w_720,ar_3:4,f_auto,q_auto,g_auto/images/voltaxMediaLibrary/mmsport/theplayerstribune-br/01fkqrpz4z2prj5mjwp5.jpg',
    biografia:
      'Zico foi um dos maiores meias da história do futebol brasileiro. Conhecido como “Galinho de Quintino”, brilhou com a camisa do Flamengo e da Seleção Brasileira, marcando gerações com sua classe e gols.',
    times: [
      { nome: 'Flamengo', data: '1971-1983' },
      { nome: 'Udinese', data: '1983-1985' },
    ],
  },
  {
    nome: 'Garrincha',
    sexo: 'Masculino',
    nascimento: '1933-10-28',
    cidade: 'Pau Grande, Brasil',
    imagem: 'https://www.museuesportivo.com.br/sistema/imagens//gd_110321172606_garrincha13829704171546731568_jpg.jpg',
    biografia:
      'Garrincha, o “Anjo das Pernas Tortas”, foi um dos jogadores mais carismáticos e geniais do futebol. Seus dribles desconcertantes e alegria contagiante marcaram a Copa de 1958 e 1962, encantando o mundo inteiro.',
    times: [
      { nome: 'Botafogo', data: '1953-1965' },
      { nome: 'Corinthians', data: '1966' },
    ],
  },
];

const App = () => {
  const [timesVisiveis, setTimesVisiveis] = useState({});

  const toggleTimes = (index) => {
    setTimesVisiveis((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <ScrollView style={styles.container}>
      {jogadores.map((jogador, index) => (
        <View key={index} style={styles.card}>
          <Image
            source={{ uri: jogador.imagem }}
            style={{ width: 300, height: 300, margin: 20, borderRadius: 10 }}
          />
          <Text style={styles.nome}>{jogador.nome}</Text>
          <Text style={styles.biografia}>{jogador.biografia}</Text>

          <View style={styles.infoBox}>
            <Text>Sexo: {jogador.sexo}</Text>
            <Text>Data de Nascimento: {jogador.nascimento}</Text>
            <Text>Local de Nascimento: {jogador.cidade}</Text>
          </View>

          <TouchableOpacity
            style={styles.botao}
            onPress={() => toggleTimes(index)}
          >
            <Text style={styles.textoBotao}>
              {timesVisiveis[index] ? 'Ocultar Times' : 'Mostrar Times'}
            </Text>
          </TouchableOpacity>

          {timesVisiveis[index] && (
            <View style={styles.listaTimes}>
              <Text style={styles.tituloTimes}>Times</Text>
              {jogador.times.map((time, idx) => (
                <View key={idx} style={styles.timeCard}>
                  <Text style={styles.bolaIcon}>⚽</Text>
                  <View>
                    <Text style={styles.timeNome}>{time.nome}</Text>
                    <Text style={styles.dataTime}>{time.data}</Text>
                  </View>
                </View>
              ))}
            </View>
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#FAFAFA',
  },
  card: {
    backgroundColor: '#FFF',
    padding: 15,
    marginBottom: 25,
    borderRadius: 12,
    elevation: 3,
    alignItems: 'center',
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 12,
  },
  biografia: {
    textAlign: 'justify',
    marginVertical: 10,
    color: '#444',
  },
  infoBox: {
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#F9F9F9',
    width: '100%',
  },
  botao: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 6,
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  textoBotao: {
    color: '#FFF',
    fontWeight: 'bold',
  },
  tituloTimes: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#222',
  },
  listaTimes: {
    marginTop: 10,
    width: '100%',
  },
  timeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  bolaIcon: {
    fontSize: 20,
    marginRight: 8,
  },
  timeNome: {
    fontSize: 16,
    fontWeight: '600',
  },
  dataTime: {
    fontSize: 14,
    color: '#666',
  },
});

export default App;