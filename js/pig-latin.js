'use strict';

const pigLatinator = function () {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  const pigLatinResult = [];

  const toPigLatin = (str) => {
    if (!str || typeof str !== 'string') {
      return;
    }

    const words = str.split(' ');
    const result = [];

    const beginsWithVowel = words
    .filter(word => {
      const lowerCase = word.toLowerCase();

      if (vowels.includes(lowerCase.charAt(0))) {
        return lowerCase;
      }
    })
    .map(word => {
      const converted = `${word}-ay`;
      pigLatinResult.push(converted);
      return converted;
    })

    const beginsWithConsonant = words
    .filter(word => {
      const lowerCase = word.toLowerCase();

      if (!(vowels.includes(lowerCase.charAt(0)))) {
        return lowerCase;
      }
    })
    .map(word => {
      const lowerCase = word.toLowerCase();
      let spliceIndex = -1;

      for (let i = 0; i < lowerCase.length; i++) {
        if (vowels.includes(lowerCase[i])) {
          spliceIndex = i;
          break;
        }
      }

      // the condition can check if x > 0 because any word that started with a vowel would not be in this array.
      if (spliceIndex > 0) {
        const untilFirstVowel = lowerCase.slice(0, spliceIndex);
        const removeFirstLetter = lowerCase.substring(spliceIndex);
        const converted = `${removeFirstLetter}-${untilFirstVowel}ay`;

        pigLatinResult.push(converted);
        return converted;
      }

      return lowerCase;
    })

    console.log(beginsWithVowel);
    console.log(beginsWithConsonant);

    console.log(`pigLatinResult is:`);
    console.log(pigLatinResult);

    return result.join(' ');
  }

  const getPigLatinResult = () => {
    console.log(pigLatinResult);
    return pigLatinResult.join(' ');
  }

  return {
    toPigLatin : toPigLatin,
    getPigLatinResult : getPigLatinResult,
    // toEnglish : toEnglish
  }
}

const sampleText = `Rain dance trust the process kirlian photography, combined energy fields burning man. Astrological earth day tantra, sarong loving kindness alkaline healing energy fractal nature of.`;

pigLatinator().toPigLatin(sampleText);
pigLatinator().getPigLatinResult();
