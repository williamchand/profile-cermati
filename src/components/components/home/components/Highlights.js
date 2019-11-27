import React from 'react';
import Card from './Card';
import {uRecipe, uHighlightsParagraph, uHighlightsParagraphOne, uHighlightsParagraphTwo, uHighlightsRow} from './styles';

import { faComments, faPaintBrush, faCubes, faBullhorn, faChartLine, faStream } from '@fortawesome/free-solid-svg-icons'

function Highlights() {
  const recipeList = [
    {
        image: faComments,
        title: "Consult",
        description: "Co-create, design thinking; strengthen infrastructure resist granular. " +
        "Revolution circular, movements or framework social impact low-hanging fruit. " +
        "Save the world compelling revolutionary progress."
    },
    {
        image: faPaintBrush,
        title: "Design",
        description: "Policymaker collaborates collective impact humanitarian shared value " +
        "vocabulary inspire issue outcomes agile. Overcome injustice deep dive agile " +
        "issue outcomes vibrant boots on the ground sustainable."
    },
    {
        image: faCubes,
        title: "Develop",
        description: "Revolutionary circular, movements a or impact framework social impact low-" +
        "hanging. Save the compelling revolutionary inspire progress. Collective " +
        "impacts and challenges for opportunities of thought provoking."
    },
    {
        image: faStream,
        title: "Marketing",
        description: "Peaceful; vibrant paradigm, collaborative cities. Shared vocabulary agile, " +
        "replicable, effective altruism youth. Mobilize commitment to overcome" +
        "injustice resilient, uplift social transparent effective."
    },
    {
        image: faChartLine,
        title: "Manage",
        description: "Change-makers innovation or shared unit of analysis. Overcome injustice " +
        "outcomes strategize vibrant boots on the ground sustainable. Optimism, " +
        "effective altruism invest optimism corporate social."
    },
    {
        image: faBullhorn,
        title: "Evolve",
        description: "Activate catalyze and impact contextualize humanitarian. Unit of analysis " +
        "overcome injustice storytelling altruism. Thought leadership mass " +
        "incarceration. Outcomes big data, fairness, social game-changer."
    },
  ];

  const showCard = () => {
    return recipeList.map(item => <Card key={item.title} image={item.image} title={item.title} description={item.description}/>);
  };

  return (
    <div className={uRecipe}>
      <div className={uHighlightsParagraph}>
        <div className={uHighlightsParagraphOne}>
          How Can I Help You?
        </div>
        <div className={uHighlightsParagraphTwo}>
          Our work then targeted, best practices outcomes social innovation synergy.
          Venture philanthropy, revolutionary inclusive policymaker relief. User-centered
          program areas scale.
        </div>
      </div>
      <div className={uHighlightsRow}>
        {showCard()}
      </div>
    </div>
  );
}

export default Highlights;
