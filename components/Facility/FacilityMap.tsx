import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: string;
}

const FacilityMap: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null; // Modal yalnızca açıkken render edilir

  return (
    <div
      className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
      onClick={onClose} // Tıklama ile modal kapanır
    >
      <div
        className="bg-white rounded-lg shadow-lg w-full max-w-2xl mx-4 relative"
        onClick={(e) => e.stopPropagation()} // İçeriğe tıklama ile kapanmayı engeller
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-600 hover:text-gray-800"
        >
          ✕
        </button>

        {/* Content */}
        <div dangerouslySetInnerHTML={{ __html: children }} />
      </div>
    </div>
  );
};

export default FacilityMap;