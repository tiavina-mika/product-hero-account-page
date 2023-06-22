import React from "react";
import { ChevronRight } from "../../components/ChevronRight";
import { InputEmojiSub } from "../../components/InputEmojiSub";
import { InputSub } from "../../components/InputSub";
import { TabBar } from "../../components/TabBar";
import { ChevronRight2 } from "../../icons/ChevronRight2";
import { Retour1 } from "../../icons/Retour1";
import "./style.css";

export const Box = () => {
  return (
    <div className="box">
      <div className="mon-compte-wrapper">
        <div className="mon-compte">
          <div className="frame-5">
            <div className="frame-6">
              <Retour1
                style={{
                  height: "24px",
                  minWidth: "24px",
                  position: "relative",
                }}
              />
              <h1 className="h-1">Mon compte</h1>
            </div>
            <div className="frame-7">
              <div className="frame-8">
                <img
                  className="rectangle"
                  alt="Rectangle"
                  src="https://generation-sessions.s3.amazonaws.com/80b5fa8801bf4ca4dc82ed32f4463c05/img/rectangle-1@2x.png"
                />
                <InputSub
                  content="Reynard"
                  state="default"
                  style={{
                    borderColor: "#f3f3f3",
                    width: "342px",
                  }}
                  subName="Nom"
                  superherosLimitedStyle={{
                    color: "#2f2f2f",
                  }}
                />
                <InputSub
                  content="Victoire"
                  state="default"
                  style={{
                    borderColor: "#f3f3f3",
                    width: "342px",
                  }}
                  subName="Prénom"
                  superherosLimitedStyle={{
                    color: "#2f2f2f",
                  }}
                />
              </div>
              <img
                className="edit"
                alt="Edit"
                src="https://generation-sessions.s3.amazonaws.com/80b5fa8801bf4ca4dc82ed32f4463c05/img/edit.svg"
              />
              <div className="frame-9">
                <InputSub
                  content="Roudoudou@entreprise.com"
                  state="default"
                  style={{
                    borderColor: "#f3f3f3",
                    width: "342px",
                  }}
                  subName="E-mail"
                  superherosLimitedStyle={{
                    color: "#2f2f2f",
                  }}
                />
                <div className="input-action">
                  <div className="input-champs">
                    <div className="laurent-p-foodch-ri">••••••••••</div>
                  </div>
                  <div className="add">
                    <div className="text-wrapper-2">Modifier</div>
                  </div>
                  <div className="div-wrapper">
                    <div className="text-wrapper-3">Mot de passe</div>
                  </div>
                </div>
              </div>
              <InputEmojiSub
                content="Produit"
                emoji="💡"
                emojiStyle={{
                  boxShadow: "unset",
                }}
                inputEmojiSubStyle={{
                  boxShadow: "unset",
                  flex: "1",
                  width: "unset",
                }}
                state="filled"
                style={{
                  alignSelf: "stretch",
                  width: "unset",
                }}
                subtitle="Équipe"
              />
              <InputEmojiSub
                content="Administrateur"
                elementStyle={{
                  color: "#a0a0a0",
                }}
                inputEmojiSubStyle={{
                  borderRadius: "6px",
                  boxShadow: "unset",
                  flex: "1",
                  marginLeft: "unset",
                  width: "unset",
                }}
                showEmoji={false}
                state="filled"
                style={{
                  alignSelf: "stretch",
                  width: "unset",
                }}
                subtitle="Rôle"
              />
              <div className="frame-10">
                <div className="text-wrapper-4">Notifications</div>
                <div className="frame-11">
                  <div className="input-dropdown">
                    <div className="add-2">
                      <div className="text-wrapper-5">🔕</div>
                    </div>
                    <div className="input-champs-2">
                      <div className="frame-12">
                        <div className="text-wrapper-6">Ne pas déranger</div>
                        <div className="text-wrapper-7">Désactivé</div>
                      </div>
                      <ChevronRight2
                        style={{
                          height: "16px",
                          minWidth: "16px",
                          position: "relative",
                        }}
                      />
                    </div>
                  </div>
                  <div className="input-dropdown-2">
                    <div className="add-3">
                      <div className="text-wrapper-8">🔴</div>
                    </div>
                    <div className="input-champs-3">
                      <div className="frame-13">
                        <div className="text-wrapper-9">Push</div>
                        <div className="text-wrapper-10">Activer les notifications</div>
                      </div>
                      <ChevronRight />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <TabBar
            monFocusStyle={{
              color: "#a0a0a0",
            }}
            paramTresStyle={{
              color: "#3d5af1",
            }}
            rGlage21Color="#3D5AF1"
            style={{
              left: "0",
              position: "absolute",
              top: "774px",
            }}
            userActivityColor="#A0A0A0"
          />
        </div>
      </div>
    </div>
  );
};
