import React, { useState } from 'react';
import { startGalaxy, updateGalaxy, stopGalaxy } from '../utils/api';

const GalaxyForm = () => {
  const [formData, setFormData] = useState({
    rc: '',
    attackTime: '',
    defenceTime: '',
    planetName: '',
    intervalTime: '',
    rival: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await startGalaxy(formData);
      alert('Galaxy started successfully');
    } catch (error) {
      alert('Error starting galaxy');
    }
  };

  const handleUpdate = async () => {
    try {
      await updateGalaxy(formData);
      alert('Galaxy updated successfully');
    } catch (error) {
      alert('Error updating galaxy');
    }
  };

  const handleStop = async () => {
    try {
      await stopGalaxy();
      alert('Galaxy stopped successfully');
    } catch (error) {
      alert('Error stopping galaxy');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="rc" className="block text-sm font-medium text-gray-700">RC</label>
        <input
          type="text"
          name="rc"
          id="rc"
          value={formData.rc}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="attackTime" className="block text-sm font-medium text-gray-700">Attack Time</label>
        <input
          type="number"
          name="attackTime"
          id="attackTime"
          value={formData.attackTime}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="defenceTime" className="block text-sm font-medium text-gray-700">Defence Time</label>
        <input
          type="number"
          name="defenceTime"
          id="defenceTime"
          value={formData.defenceTime}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="planetName" className="block text-sm font-medium text-gray-700">Planet Name</label>
        <input
          type="text"
          name="planetName"
          id="planetName"
          value={formData.planetName}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="intervalTime" className="block text-sm font-medium text-gray-700">Interval Time</label>
        <input
          type="number"
          name="intervalTime"
          id="intervalTime"
          value={formData.intervalTime}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="rival" className="block text-sm font-medium text-gray-700">Rival</label>
        <input
          type="text"
          name="rival"
          id="rival"
          value={formData.rival}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div className="flex space-x-4">
        <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          Start Galaxy
        </button>
        <button type="button" onClick={handleUpdate} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
          Update Galaxy
        </button>
        <button type="button" onClick={handleStop} className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
          Stop Galaxy
        </button>
      </div>
    </form>
  );
};

export default GalaxyForm;