import React, { useEffect, useRef, useMemo } from 'react';
import { useGraph } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import { SkeletonUtils } from 'three-stdlib';

import characterScene from '/assets/character.gltf?url';

const Character = function Model(props) {
  const group = useRef();
  const { scene, animations } = useGLTF(characterScene);
  const { actions } = useAnimations(animations, group);

  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

  useEffect(() => {
    if (actions) {
      const action = actions[Object.keys(actions)[0]];
      action.play();

      setTimeout(() => {
        action.stop();
      }, 13000);

     
    }
  }, [actions]);

  return (
    <group ref={group} {...props} position={[0, -1, 0]} dispose={null} scale={[1, 1, 1]} castShadow receiveShadow>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Armature_127" scale={1.233}>
                <group name="GLTF_created_0">
                  <primitive object={nodes.GLTF_created_0_rootJoint} />
                  <group name="Body_121" />
                  <group name="Body002_122" />
                  <group name="Cloth_123" />
                  <group name="Hair_124" />
                  <group name="Head_125" />
                  <group name="Plane_126" />
                  <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.Body} skeleton={nodes.Object_7.skeleton} castShadow receiveShadow />
                  <skinnedMesh name="Object_8" geometry={nodes.Object_8.geometry} material={materials.O_Cloth} skeleton={nodes.Object_8.skeleton} castShadow receiveShadow />
                  <skinnedMesh name="Object_10" geometry={nodes.Object_10.geometry} material={materials.Body} skeleton={nodes.Object_10.skeleton} castShadow receiveShadow />
                  <skinnedMesh name="Object_12" geometry={nodes.Object_12.geometry} material={materials.Cloth} skeleton={nodes.Object_12.skeleton} castShadow receiveShadow />
                  <skinnedMesh name="Object_13" geometry={nodes.Object_13.geometry} material={materials.O_Cloth} skeleton={nodes.Object_13.skeleton} castShadow receiveShadow />
                  <skinnedMesh name="Object_15" geometry={nodes.Object_15.geometry} material={materials.Hair} skeleton={nodes.Object_15.skeleton} castShadow receiveShadow />
                  <skinnedMesh name="Object_16" geometry={nodes.Object_16.geometry} material={materials.O_Hair} skeleton={nodes.Object_16.skeleton} castShadow receiveShadow />
                  <skinnedMesh name="Object_18" geometry={nodes.Object_18.geometry} material={materials.Body} skeleton={nodes.Object_18.skeleton} castShadow receiveShadow />
                  <skinnedMesh name="Object_19" geometry={nodes.Object_19.geometry} material={materials.O_Body} skeleton={nodes.Object_19.skeleton} castShadow receiveShadow />
                  <skinnedMesh name="Object_21" geometry={nodes.Object_21.geometry} material={materials.material} skeleton={nodes.Object_21.skeleton} castShadow receiveShadow />
                </group>
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  );
};

export default Character;
