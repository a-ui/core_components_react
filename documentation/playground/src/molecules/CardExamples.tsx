import { Button, Card, Copyright, Flyout } from '@a-ui/react';

export function CardExamples() {
  return (
    <div className="u-margin">
      <h2>Cards</h2>
      <div style={{ maxWidth: '420px' }} className="u-margin">
        <Card
          image={{
            src: 'https://placedog.net/1000/1000?r',
            alt: 'A random dog',
            children: (
              <Copyright forImage sign="©" label="With link" link="https://www.google.be" qa="image copyright" />
            )
          }}
          title={{ label: 'Card Title', tag: 'h2' }}
          subTitle="May 4th 2021, 12:34"
          description="Arma virumque cano, Troiae qui primus ab oris Italiam, fato profugus, Laviniaque venit litora, multum ille et terris iactatus et alto vi superum saevae memorem Iunonis ob iram. Multa quoque et bello passus, dum conderet urbem, inferretque deos Latio, genus unde Latinum, Albanique patres, atque altae moenia Romae."
          link={{ label: 'link label', target: 'https://www.google.be' }}
        />
        <Card
          image={{
            src: 'https://placedog.net/1000/800?r',
            alt: 'Another random dog'
          }}
          title={{ label: 'Free', tag: 'h5' }}
          subTitle="Card with free content"
        >
          <h6>Two custom buttons</h6>
          <Button title="Click me" theme="danger">
            Custom button one
          </Button>
          <Flyout trigger={<Button>Custom button two</Button>}>Surprise!</Flyout>
        </Card>
      </div>
    </div>
  );
}

export default CardExamples;
