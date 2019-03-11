import { TCard } from "../types";
import React, {useRef} from "react";
import styles from "./Card.module.scss";
import {useActions, useStore} from "../store";

interface Props {
  card: TCard;
}

export const Card: React.FC<Props> = ({ card }: Props) => {
  const rotationValue = useRef(Math.random() * 20 - 10);
  const selectCard = useActions(actions => actions.cards.select);
  const clearedCards = useStore(state => state.cards.clearedItems);
  const selectedCards = useStore(state => state.cards.selectedItems);
  const isSelected = !!selectedCards.find(c => c.id === card.id);
  const isCleared = !!clearedCards.find(c => c.id === card.id);

  return (
    <div
      className={`${styles.card} ${isSelected || isCleared ? styles.flipped : ""} ${
        isCleared ? styles.cleared : ""
      }`}
      style={{
        transform: `rotate(${rotationValue.current}deg)`
      }}
      onClick={() => {
        if (!isSelected && !isCleared){
          selectCard(card);
        }
      }}
    >
      <div className={styles.inner}>
        <div className={styles.front}>
          <div className={styles.pattern} />
        </div>
        <div className={styles.back}>
          <img className={styles.img} alt={card.src} src={card.src} />
        </div>
      </div>
    </div>
  );
};
