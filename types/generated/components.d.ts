import type { Schema, Struct } from '@strapi/strapi';

export interface AnwserAnswers extends Struct.ComponentSchema {
  collectionName: 'components_anwser_answers';
  info: {
    displayName: 'Answers';
    icon: 'plus';
  };
  attributes: {
    descricao: Schema.Attribute.Text;
    imagem: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    valid: Schema.Attribute.Boolean;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'anwser.answers': AnwserAnswers;
    }
  }
}
