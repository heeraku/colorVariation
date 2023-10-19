export default function Tv() {
  return (
    <>
      <mesh visible position={[-5.63, 2.3, 0.6]} rotation={[0, Math.PI / 2, 0]}>
        <planeGeometry attach="geometry" args={[4.9, 2.9, 3]} />
        <meshPhysicalMaterial
          attach="material"
          color="#27374D"
          roughness={0.2}
          metalness={0.1}
          clearcoat={1}
          clearcoatRoughness={1}
          reflectivity={0.1}
        />
      </mesh>
      <mesh position={[-5.7, 2.3, 0.6]} rotation={[0, Math.PI / 2, 0]}>
        <boxBufferGeometry args={[5, 3, 0.1]} />
        <meshBasicMaterial color={"black"} />
      </mesh>
      <mesh position={[-5.63, 0.8, 0.6]} rotation={[0, 0, 0]}>
        <boxBufferGeometry args={[0.05, 0.05, 1]} />
        <meshBasicMaterial color={"#9BABB8"} />
      </mesh>
    </>
  );
}
